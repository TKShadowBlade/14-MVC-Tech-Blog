const handleCommenting = async (e) => {
    e.preventDefault();

    const postingId = document.querySelector('input[name="post-id"]').value;
    const postingBody = document.querySelector('textarea[name="comment-body"]').value;

    if(postingBody) {
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                postingId,
                postingBody
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        document.location.reload();
    }

};

document.querySelector('#new-comment').addEventListener('submit', handleCommenting);