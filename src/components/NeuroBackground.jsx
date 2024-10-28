import React, { useRef, useEffect } from 'react';
import './NeuroBackground.css';

const NeuroBackground = () => {
  const canvasRef = useRef(null);
  let uniforms = {};
  const pointer = { x: 0, y: 0, tX: 0, tY: 0 };
  const devicePixelRatio = Math.min(window.devicePixelRatio, 2);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const gl = initShader(canvasEl);
    setupEvents();

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    render();

    function initShader(canvasEl) {
      const vsSource = document.getElementById('vertShader').innerHTML;
      const fsSource = document.getElementById('fragShader').innerHTML;
      const gl = canvasEl.getContext('webgl') || canvasEl.getContext('experimental-webgl');

      if (!gl) {
        alert('WebGL is not supported by your browser.');
        return;
      }

      function createShader(gl, sourceCode, type) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, sourceCode);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }

        return shader;
      }

      const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
      const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);

      function createShaderProgram(gl, vertexShader, fragmentShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));
          return null;
        }

        return program;
      }

      const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
      uniforms = getUniforms(gl, shaderProgram);

      function getUniforms(gl, program) {
        let uniforms = {};
        let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
          let uniformName = gl.getActiveUniform(program, i).name;
          uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
        }
        return uniforms;
      }

      const vertices = new Float32Array([-1., -1., 1., -1., -1., 1., 1., 1.]);

      const vertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

      gl.useProgram(shaderProgram);

      const positionLocation = gl.getAttribLocation(shaderProgram, 'a_position');
      gl.enableVertexAttribArray(positionLocation);

      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      return gl;
    }

    function render() {
      const currentTime = performance.now();

      pointer.x += (pointer.tX - pointer.x) * .5;
      pointer.y += (pointer.tY - pointer.y) * .5;

      gl.uniform1f(uniforms.u_time, currentTime);
      gl.uniform2f(uniforms.u_pointer_position, pointer.x / window.innerWidth, 1 - pointer.y / window.innerHeight);
      gl.uniform1f(uniforms.u_scroll_progress, window.pageYOffset / (2 * window.innerHeight));

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }

    function resizeCanvas() {
      canvasEl.width = window.innerWidth * devicePixelRatio;
      canvasEl.height = window.innerHeight * devicePixelRatio;
      gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
      gl.viewport(0, 0, canvasEl.width, canvasEl.height);
    }

    function setupEvents() {
      window.addEventListener('pointermove', e => updateMousePosition(e.clientX, e.clientY));
      window.addEventListener('touchmove', e => updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY));
      window.addEventListener('click', e => updateMousePosition(e.clientX, e.clientY));
    }

    function updateMousePosition(eX, eY) {
      pointer.tX = eX;
      pointer.tY = eY;
    }
  }, []);

  return (
    <>
      <canvas id="neuro" ref={canvasRef}></canvas>
      <script type="x-shader/x-fragment" id="vertShader">
        {`precision mediump float;

        varying vec2 vUv;
        attribute vec2 a_position;

        void main() {
            vUv = .5 * (a_position + 1.);
            gl_Position = vec4(a_position, 0.0, 1.0);
        }`}
      </script>
      <script type="x-shader/x-fragment" id="fragShader">
        {`precision mediump float;

        varying vec2 vUv;
        uniform float u_time;
        uniform float u_ratio;
        uniform vec2 u_pointer_position;
        uniform float u_scroll_progress;

        vec2 rotate(vec2 uv, float th) {
            return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
        }

        float neuro_shape(vec2 uv, float t, float p) {
            vec2 sine_acc = vec2(0.);
            vec2 res = vec2(0.);
            float scale = 8.;

            for (int j = 0; j < 15; j++) {
                uv = rotate(uv, 1.);
                sine_acc = rotate(sine_acc, 1.);
                vec2 layer = uv * scale + float(j) + sine_acc - t;
                sine_acc += sin(layer);
                res += (.5 + .5 * cos(layer)) / scale;
                scale *= (1.2 - .07 * p);
            }
            return res.x + res.y;
        }

        void main() {
            vec2 uv = .5 * vUv;
            uv.x *= u_ratio;

            vec2 pointer = vUv - u_pointer_position;
            pointer.x *= u_ratio;
            float p = clamp(length(pointer), 0., 1.);
            p = .5 * pow(1. - p, 2.);

            float t = .001 * u_time;
            vec3 color = vec3(0.);

            float noise = neuro_shape(uv, t, p);

            noise = 1.2 * pow(noise, 3.);
            noise += pow(noise, 10.);
            noise = max(.0, noise - .5);
            noise *= (1. - length(vUv - .5));

            // color = normalize(vec3(.2, .5 + .4 * cos(3. * u_scroll_progress), .5 + .5 * sin(3. * u_scroll_progress)));
// color = normalize(vec3(0.69, 0.88, 0.9)); // Powder Blue
//color = normalize(vec3(0.74, 0.56, 0.56)); // Rosy Brown
//color = normalize(vec3(0.93, 0.51, 0.93)); // Violet color
//color = normalize(vec3(0.4, 0.4, 0.1)); // Oil color
//color = normalize(vec3(0.6, 0.3, 0.0)); // Brown color

//color = normalize(vec3(0.0, 1.0, 1.0)); // Aqua color

//color = normalize(vec3(0.86, 0.08, 0.24)); // Crimson color

//color = normalize(vec3(0.0, 1.0, 1.0)); // Cyan color

//color = normalize(vec3(0.55, 0.0, 0.55)); // Dark Magenta color


//color = normalize(vec3(0.4, 0.87, 0.67)); // Medium Aqua Marine color

//color = normalize(vec3(0.78, 0.08, 0.52)); // Medium Violet Red color

//color = normalize(vec3(0.0, 0.98, 0.6)); // Medium Spring Green color

//color = normalize(vec3(1.0, 0.27, 0.0)); // Orange Red color

//color = normalize(vec3(0.98, 0.5, 0.45)); // Salmon color

//color = normalize(vec3(0.96, 0.64, 0.38)); // Sandy Brown color

//color = normalize(vec3(0.18, 0.55, 0.34)); // Sea Green color

//color = normalize(vec3(0.63, 0.32, 0.18)); // Sienna color


//color = normalize(vec3(1.0, 0.39, 0.28)); // Tomato color

color = normalize(vec3(0.25, 0.88, 0.82)); // Turquoise color

//color = normalize(vec3(1.0, 0.08, 0.58)); // Deep Pink color

//color = normalize(vec3(1.0, 0.41, 0.71)); // Hot Pink color


            color = color * noise;

            gl_FragColor = vec4(color, noise);
        }`}
      </script>
    </>
  );
};

export default NeuroBackground;