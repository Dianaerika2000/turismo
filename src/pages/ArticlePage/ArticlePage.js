import Comment from '../../components/Comment/Comment';

export default function ArticlePage() {
  let comments = [
    {
      avatar: 'https://randomuser.me/api/portraits',
      name: 'John Doe',
      userLink: 'https://randomuser.me/api/portraits',
      institution: 'UMSA',
      commentDate: '08-22-2022 10:00',
      comment: 'Que onda con este articulo?',
    },
  ];

  return (
    <div className="container">
        <h1>Article Page</h1>
      <div className="row">
        <div className="col">
          {comments.map((comment, index) => {
            return (
              <Comment
                avatar={comment.avatar}
                name={comment.name}
                userLink={comment.userLink}
                institution={comment.institution}
                commentDate={comment.commentDate}
                key={index}
              >
                {comment.comment}
              </Comment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
