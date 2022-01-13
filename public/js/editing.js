const postingId = document.querySelector('input[name="post-id"]').value;

const handleEditing = async (e) => {
    e.preventDefault();

    const postingTitle = document.querySelector('input[name="post-title"]').value;
    const postingBody = document.querySelector('textarea["name="post-body"]').value;

    await fetch(`/api/post/${postingId}`, {
        method: 'PUT',
        body: JSON.stringify({
            postingTitle,
            postingBody
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    document.location.replace('/dash');
};

const handleDeleting = async () => {
    await fetch(`/api/post/${postingId}`, {
        method: 'DELETE'
    });
    document.location.replace('/dash');
};

document.querySelector('#edit-form').addEventListener('submit', handleEditing);
document.querySelector('#delete-button').addEventListener('click', handleDeleting);