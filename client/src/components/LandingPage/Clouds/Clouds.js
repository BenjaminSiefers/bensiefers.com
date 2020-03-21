import React from 'react';
import * as THREE from 'three';
import vertShader from './Vert';
import fragShader from './Frag';
class Clouds extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.delta = 0;
        this.fps = 30;
        this.start = this.start.bind(this);
        this.animate = this.animate.bind(this);
        
    }
    componentDidMount(){
        this.clock = new THREE.Clock();
        const scene = new THREE.Scene();        
        const camera = new THREE.OrthographicCamera(
            this.state.width  / -2,
            this.state.width  / 2,
            this.state.height / 2, 
            this.state.height / -2, 0,
            1000
        );
        camera.position.z = 4;
        
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setClearColor(0x555, 0);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(this.state.width, this.state.height); 
        
        const geometry = new THREE.PlaneGeometry(
            this.state.width,
            this.state.height,
            1
        );
        
        var customUniforms = {
            time: { value: 1.0 },
            resolution: { value: new THREE.Vector2(this.state.width, this.state.width) }
        };

        var materialClouds = new THREE.ShaderMaterial({
            uniforms: customUniforms,
            vertexShader: vertShader,
            fragmentShader: fragShader,
            transparent: true
        });

        var clouds = new THREE.Mesh(geometry, materialClouds);
        clouds.rotation.z =  Math.PI;
        scene.add(clouds);

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.material = materialClouds;
        this.clouds = clouds;
        this.mount.appendChild(this.renderer.domElement);
        this.start();
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }
    

    start(){
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    }

    stop() {
        cancelAnimationFrame(this.frameId)
    }
    
    animate() {
        this.delta += this.clock.getDelta();
        if(this.delta > (1/this.fps)){
            this.renderScene();
            this.setState({width: window.innerWidth, height: window.innerHeight});
            this.clouds.material.uniforms.time.value += .02;
            this.clouds.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth, window.innerHeight);
            this.clouds.scale.set(window.innerWidth, window.innerHeight, 1);
            this.delta = this.delta % (1/this.fps);
        }

        this.frameId = window.requestAnimationFrame(this.animate);
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera);
    }

    render() {
      return (
        <div className="Clouds" ref={(mount) => { this.mount = mount }}
         />
      );
    }
}

export default Clouds; 