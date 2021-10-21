function main() {
  /**
   * @type {HTMLCanvasElement} canvas
   */
  const canvas = document.getElementById("myCanvas");

  /**
   * @type {WebGLRenderingContext} gl
   */
  const contex = canvas.getContext("webgl");

  //posisi titik
  var vertexShaderCode = `
      void main(){
          //membuat titik di tengah
          gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
          gl_PointSize = 10.0;
      }`;

  var vertexShader = contex.createShader(contex.VERTEX_SHADER);
  contex.shaderSource(vertexShader, vertexShaderCode);
  contex.compileShader(vertexShader);

  //define fragment
  var fragmentShaderCode = `
      void main(){
          gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);//green color
      }
      `;

  var fragmentShader = contex.createShader(contex.FRAGMENT_SHADER);
  contex.shaderSource(fragmentShader, fragmentShaderCode);
  contex.compileShader(fragmentShader);

  //for execute
  var shaderProgram = contex.createProgram();
  contex.attachShader(shaderProgram, vertexShader);
  contex.attachShader(shaderProgram, fragmentShader);
  contex.linkProgram(shaderProgram);
  contex.useProgram(shaderProgram);

  //define background
  contex.clearColor(1.0, 1.0, 1.0, 1.0);
  contex.clear(contex.COLOR_BUFFER_BIT);

  contex.drawArrays(contex.POINTS, 0, 1);
}
