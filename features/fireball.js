// // fireball.js
// export function displayFireballOnEarth(data, scene, camera) {
//     const earthRadius = 6371; // Earth's radius in km
//     const latitude = parseFloat(data["Latitude (deg.)"]);
//     const longitude = parseFloat(data["Longitude (deg.)"]);
//     const altitude = parseFloat(data["Altitude (km)"]);
  
//     // Convert the latitude, longitude, and altitude to 3D coordinates
//     const fireballPosition = latLongToVector3(latitude, longitude, earthRadius, altitude);
  
//     // Create a sphere to represent the fireball
//     const fireballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
//     const fireballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//     const fireballMesh = new THREE.Mesh(fireballGeometry, fireballMaterial);
  
//     fireballMesh.position.copy(fireballPosition);
//     scene.add(fireballMesh);
  
//     fireballMesh.addEventListener('mouseover', () => {
//       const label = createLabel(`Velocity: ${data["Velocity (km/s)"]} km/s`);
//       updateLabelPosition(fireballMesh, camera);
//     });
//   }
  

export function prompt(){
    alert('hello')
}