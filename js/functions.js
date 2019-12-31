function uploadedFileIsMidi() {
    if (!$("#midi").val()) {
        return false;
    }

    if ($("#midi").val().slice(-3) == 'mid') {
        return true;
    } else {
        return false;
    }
}