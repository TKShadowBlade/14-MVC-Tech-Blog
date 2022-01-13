const handleNewPosts = async function(evt) {
    evt.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
        }),
        headers: { 'Content-Type': 'application/json '},
    });

    document.location.replace('/dash');
};

document.querySelector('#new-post').addEventListener('submit', handleNewPosts);