document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('on-off-toggle');

    chrome.storage.sync.get(['isEnabled'], (result) => {
        toggleSwitch.checked = result.isEnabled || false;
    });

    toggleSwitch.addEventListener('change', () => {
      chrome.storage.sync.set({ isEnabled: toggleSwitch.checked})
    });
});

