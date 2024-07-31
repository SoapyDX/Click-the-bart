// deleteData.js
(function() {
    function disableConsoleAccess() {
        document.addEventListener('keydown', function(event) {
            if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 73) {
                event.preventDefault();
                event.stopPropagation();
                alert('fuck you.');
            }
        }, true);

        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        }, true);

        Object.defineProperty(window, 'console', {
            get: function() {
                throw new Error('Console access is disabled.');
            }
        });
    }

    disableConsoleAccess();

    window.deleteSiteData = function() {
        localStorage.clear();
        sessionStorage.clear();
        alert('All site data has been deleted.');
    };
})();
