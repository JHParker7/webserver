import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { randInt } from "three/src/math/MathUtils";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import CANNON from "cannon";

function ThreeExp() {
  const refContainer = useRef(); //;

  useEffect(() => {
    if (document.getElementById("ThreeExp").childNodes.length === 0) {
      var world = new CANNON.World({
        gravity: new CANNON.Vec3(0, -9.82, 0), // m/s²
      });

      var row_len = 30;
      var col_len = 30;

      var map = Array(row_len + 2)
        .fill()
        .map(() => Array(col_len + 2).fill(0));
      for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
          if ((row === 1 || row === 2) && (col === 1 || col === 2)) {
          } else if (row === row_len && col === col_len) {
            map[row][col] = 2;
          } else if (
            row === 0 ||
            row === row_len + 1 ||
            col === 0 ||
            col === col_len + 1
          ) {
            map[row][col] = 1;
          } else {
            map[row][col] = randInt(0, 1);
          }
        }
      }

      console.log(map);

      const scene = new THREE.Scene();
      const GoalGeometry = new THREE.BoxGeometry(1, 1, 1);
      const GoalMaterial = new THREE.MeshLambertMaterial({ color: "green" });
      const Goal = new THREE.Mesh(GoalGeometry, GoalMaterial);
      var x = row_len / 2 + 0.5;
      var z = col_len / 2 + 0.5;
      Goal.position.x = x;
      Goal.position.z = z;

      scene.add(Goal);

      var n = map.length*map[0].length;
      var path = [];

      function find_path(i, j, path_length) {
        if (path.length < n) {
          return "dead_end";
        } else if (map[i][j] === 2) {
          return true;
        }
        for (let k = 0; k > n; k++) {
          if (map[i][k] === 0 || map[i][k] === 0) {
            if (find_path(k, j, path_length + 1)) {
              return true;
            }
          }
        }
        return false;
      }

      var y_len = map.length - 2;
      var x_len = map[0].length - 2;
      var no_way_out = true;
      var dead_end_count = 0;
      var x = randInt(1, x_len);
      var y = randInt(1, y_len);

      while (no_way_out) {
        console.log(no_way_out)
        var findPath = find_path(0, 0, 0);
        if (findPath === "dead_end") {
          dead_end_count = dead_end_count + 1;

          //console.log("dead_end")
          if (dead_end_count > 2000) {
            no_way_out = false;
          } else {
            x = randInt(1, x_len);
            y = randInt(1, y_len);
            if (x!==x_len && y!==y_len){
            map[y][x] = 0;
            no_way_out = true;}
          }
        } else if (findPath === false) {
          no_way_out = false;
          //console.log(map)
        } else {no_way_out = false;
        console.log(no_way_out)
      }
      }

      /*
      
      def find_path(i, j, path_length):

    # The maximal length of a path without a cycle is n
    # (traverse each vertex once)
    if path_length>n:
        return False

    # Is there a direct path from i to j?
    if G[i][j]==1:
        return True

    # Is there an indirect path from i to j over i's neighbor k?
    for k in range(n):
        if G[i][k]==1: # Vertex k is a neighbor of i
            if find_path(k, j, path_length+1):
                return True

    # We have not found any path
    return False
      
      */

      //scene.add(stars)
      const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
      const cubeMaterial = new THREE.MeshLambertMaterial({ color: "blue" });

      var cubes = [];
      var soild_walls = [];
      var cube_counter = 0;

      for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
          if (map[row][col] === 1) {
            var x = row - row_len / 2 + 0.5;
            var z = col - col_len / 2 + 0.5;
            cubes[cube_counter] = new THREE.Mesh(cubeGeometry, cubeMaterial);
            scene.add(cubes[cube_counter]);
            soild_walls[cube_counter] = new CANNON.Body({
              mass: 0, // kg
              position: new CANNON.Vec3(x, 0.5, z), // m
              shape: new CANNON.Box(new CANNON.Vec3(0.5, 5, 0.5)),
            });
            world.addBody(soild_walls[cube_counter]);

            cube_counter = cube_counter + 1;
          }
        }
      }

      const PlayerGeometry = new THREE.SphereGeometry(0.4);
      const PlayerMaterial = new THREE.MeshLambertMaterial({ color: "green" });
      const player = new THREE.Mesh(PlayerGeometry, PlayerMaterial);

      scene.add(player);
      var y = 1 - col_len / 2 + 0.5;
      var x = 1 - row_len / 2 + 0.5;
      player.position.x = x;
      player.position.y = y;
      player.position.z = 0.5;

      const player_box = new CANNON.Body({
        mass: 1, // kg
        position: new CANNON.Vec3(x, 1, y), // m
        shape: new CANNON.Sphere(0.4),
      });
      world.addBody(player_box);

      const color = 0xffffff;
      const intensity = 1;
      const light = new THREE.PointLight(color, intensity, 0, 0.1);
      scene.add(light);

      const FloorGeometry = new THREE.BoxGeometry(row_len + 2, -0, col_len + 2);
      const FloorMaterial = new THREE.MeshLambertMaterial({ color: "red" });

      const Floor = new THREE.Mesh(FloorGeometry, FloorMaterial);

      scene.add(Floor);

      const ground = new CANNON.Body({
        mass: 0, // kg
        position: new CANNON.Vec3(1, 0.001, 1), // m
        shape: new CANNON.Box(new CANNON.Vec3(row_len + 2, -0.01, col_len + 2)),
        type: CANNON.Body.STATIC,
      });
      world.addBody(ground);
      //ground.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);

      const camera = new THREE.PerspectiveCamera();

      var xSpeed = 1;
      var ySpeed = 1;

      document.addEventListener("keydown", onDocumentKeyDown, false);
      function onDocumentKeyDown(event) {
        console.log(event.which);
        var keyCode = event.which;
        var direction = new THREE.Vector3();
        var vec = camera.getWorldDirection(direction);
        var vec_x = vec.x;
        var vec_z = vec.z;

        var vec_sum = Math.atan(vec_x / vec_z) * (180 / Math.PI);

        if (keyCode === 87) {
          player_box.velocity.z -= ySpeed;
        } else if (keyCode === 83) {
          player_box.velocity.z += ySpeed;
        } else if (keyCode === 65) {
          player_box.velocity.x -= xSpeed;
        } else if (keyCode === 68) {
          player_box.velocity.x += xSpeed;
        }
      }

      const aspectRatio = window.innerWidth / window.innerHeight;

      //const camera = new THREE.OrthographicCamera(-1*aspectRatio,1*aspectRatio,1,-1,0.1,200)aa

      //cube.position.z=0.5;
      scene.add(camera);

      const renderer = new THREE.WebGLRenderer();
      refContainer.current &&
        refContainer.current.appendChild(renderer.domElement);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      if (col_len === row_len) {
        var y = col_len + 6;
      } else if (col_len > row_len) {
        var y = col_len + 6;
      } else if (col_len < row_len) {
        var y = row_len + 6;
      }

      camera.position.z = 0;
      camera.position.y = y;
      camera.position.x = 0;
      //const axesHelper= new THREE.AxesHelper(2);
      //scene.add(axesHelper)
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      const renderloop = () => {
        camera.lookAt(player.position);
        //player_box.velocity.x=0
        //player_box.velocity.y=0
        //player_box.velocity.z=0
        world.step(1 / 60);
        camera.aspect = window.innerWidth / window.innerHeight;
        //for(let i=0;i<20;i++){
        //  stars[i].position.x=stars[i].position.x+randInt(-0.001,0.001)
        //  stars[i].position.y=stars[i].position.y+randInt(-0.001,0.001)
        //  stars[i].position.z=stars[i].position.z+randInt(-0.001,0.001)
        //}

        for (let i = 0; i < cubes.length; i++) {
          cubes[i].position.copy(soild_walls[i].position);
          cubes[i].quaternion.copy(soild_walls[i].quaternion);
        }

        player.position.copy(player_box.position);
        player.quaternion.copy(player_box.quaternion);

        light.position.copy(player.position);
        light.quaternion.copy(player.quaternion);
        light.position.y += 1;
        //camera.position.copy(player.position);
        //camera.quaternion.copy(player.quaternion);

        Floor.position.copy(ground.position);
        Floor.quaternion.copy(ground.quaternion);

        controls.update();

        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
        renderer.render(scene, camera);

        window.requestAnimationFrame(renderloop);
      };
      //  width: 80vw;
      //height: 80vh;

      renderloop();
    }
  });
  return <div ref={refContainer} id="ThreeExp" class="section"></div>;
}

export default ThreeExp;
