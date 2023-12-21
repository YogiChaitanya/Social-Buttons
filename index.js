const Button = props => {
  //  Write your code here.
  const {className, buttonText} = props

  return <button className={`button ${className}`}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='main-heading'>Social Buttons</h1>
    <div className='buttons-container'>
      <Button buttonText = 'Like' className = 'like-btn ' />
      <Button buttonText = "Comment" className = "comment-btn"/>
      <Button buttonText = "Share" className = "share-btn"/>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
