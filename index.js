const Button = (props) => {
  {content,class}=props;
  return <button className={class}>{content}</button>
};

const element = (
  <div className="bg_container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button_container">
      <Button class="like" content="Like"/>
      <Button class="comment" content="Comment"/>
      <Button class="share" content="Share"/>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
