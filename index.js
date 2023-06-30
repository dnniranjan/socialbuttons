const Button = (props) => {
  const { content, class1 } = props;
  return <button className={class1}>{content}</button>;
};

const element = (
  <div className="bg_container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button_container">
      <Button class1="like" content="Like" />
      <Button class1="comment" content="Comment" />
      <Button class1="share" content="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
