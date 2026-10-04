const missionForm = document.querySelector('#missionForm');
const missionOutput = document.querySelector('#missionOutput');

if (missionForm && missionOutput) {
  missionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(missionForm);
    const missionName = formData.get('missionName');
    const rocket = formData.get('rocket');
    const destination = formData.get('destination');
    const payload = formData.get('payload');
    const profile = formData.get('profile');

    missionOutput.innerHTML = `
      <div class="mission-result">
        <p class="eyebrow">TRANSMISSION CONFIRMED</p>
        <h2>${missionName}</h2>
        <p class="text-secondary mb-4">Your mission profile is ready for review.</p>
        <div class="result-line"><span>VEHICLE</span><span>${rocket}</span></div>
        <div class="result-line"><span>DESTINATION</span><span>${destination}</span></div>
        <div class="result-line"><span>PAYLOAD</span><span>${payload} kg</span></div>
        <div class="result-line"><span>PROFILE</span><span>${profile.toUpperCase()}</span></div>
        <div class="mt-4 tag tag-orange">STATUS: GO FOR LAUNCH</div>
      </div>`;
  });
}
