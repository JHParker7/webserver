import * as THREE from 'three';
import { randInt } from 'three/src/math/MathUtils'
import { useEffect, useRef } from "react";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import "./Background.css"

function Background() {
  const refContainer = useRef(null);
  useEffect(() => {
    if (document.getElementById("ThreeExp").childNodes.length===0) {
    const scene = new THREE.Scene()

    const starGeometry = new THREE.SphereGeometry(0.1)
    const blue_starMaterial = new THREE.MeshBasicMaterial({color: "blue"})
    const purple_starMaterial = new THREE.MeshBasicMaterial({color: "purple"})
    const white_starMaterial = new THREE.MeshBasicMaterial({color: "white"})
    const sun1Geometry = new THREE.SphereGeometry(1)
    const sun1Material = new THREE.MeshBasicMaterial({color: "white"})
    
    const sun1=new THREE.Mesh(
      sun1Geometry,sun1Material
    )
    
    const sun2Geometry = new THREE.SphereGeometry(1.1)
    const sun2Material = new THREE.MeshBasicMaterial({color: "blue",wireframe: true})
    
    const sun2=new THREE.Mesh(
      sun2Geometry,sun2Material
    )
    
    const sun3Geometry = new THREE.SphereGeometry(1.2)
    const sun3Material = new THREE.MeshBasicMaterial({color: "purple",wireframe: true,opacity:0.99})
    
    const sun3=new THREE.Mesh(
      sun3Geometry,sun3Material
    )
    
    const solar=new THREE.Group()
    
    solar.add(sun3)
    solar.add(sun2)
    solar.add(sun1)
    
    var stars = []
    //const stars = new THREE.Group()
    for(let i=0;i<10000;i++){
      var b_or_p=randInt(0,2)

      if (b_or_p===1){
      stars[i] = new THREE.Mesh(
        starGeometry,blue_starMaterial
      )}

      if (b_or_p===0){
        stars[i] = new THREE.Mesh(
          starGeometry,purple_starMaterial
        )}
      
        if (b_or_p===2){
          stars[i] = new THREE.Mesh(
            starGeometry,white_starMaterial
          )}

      stars[i].position.x=randInt(-100,100)
      stars[i].position.y=randInt(-100,100)
      stars[i].position.z=randInt(-100,100)
      solar.add(stars[i])
    }
    //scene.add(stars)

    solar.position.x=10

    scene.add(solar)
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,0.1,30000)
    
    const aspectRatio = window.innerWidth/window.innerHeight
    
    //const camera = new THREE.OrthographicCamera(-1*aspectRatio,1*aspectRatio,1,-1,0.1,200)
    
    camera.position.z=50
    camera.position.y=10
    
    scene.add(camera)
    
    const canvas=document.querySelector("canvas.threejs")
    const renderer = new THREE.WebGLRenderer()
    refContainer.current && refContainer.current.appendChild( renderer.domElement )
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    const controls = new OrbitControls(camera,renderer.domElement)
    controls.enableDamping = true
    controls.autoRotate = true
    controls.enabled=false
    
    //const axesHelper= new THREE.AxesHelper(2);
    //scene.add(axesHelper)
    
    const renderloop = () => {
      camera.aspect=window.innerWidth/window.innerHeight
      //for(let i=0;i<20;i++){
      //  stars[i].position.x=stars[i].position.x+randInt(-0.001,0.001)
      //  stars[i].position.y=stars[i].position.y+randInt(-0.001,0.001)
      //  stars[i].position.z=stars[i].position.z+randInt(-0.001,0.001)
      //}
      sun3.rotation.x=sun3.rotation.x+0.01
      sun3.rotation.y=sun3.rotation.y+0.01
      sun2.rotation.x=sun2.rotation.x-0.01
      sun2.rotation.z=sun2.rotation.z-0.01
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth,window.innerHeight)
      controls.update()
      renderer.render(scene,camera)
      window.requestAnimationFrame(renderloop)
    }
    
    renderloop()
  }});
  return (
    <div id="background" ref={refContainer}></div>

  );
}

export default Background