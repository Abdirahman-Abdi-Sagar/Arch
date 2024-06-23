document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.querySelector('.comment-form');
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = document.querySelector('#comment').value;
        if (commentText.trim()) {
            const commentSection = document.querySelector('.comments');
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<p><strong>You</strong> - ${commentText}</p>`;
            commentSection.insertBefore(newComment, commentForm);
            commentForm.reset();
        }
    });
});
