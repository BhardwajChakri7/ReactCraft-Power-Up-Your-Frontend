const Box = props => {
  const {boxSize, classname} = props
  return <p className={classname}>{boxSize}</p>
}

const element = (
  //  Write your code here.
  <div className='main-bg'>
    <h1 className='main-heading'>Boxes</h1>
    <div className='sub-bg'>
      <Box boxSize='Small' classname='small-box' />
      <Box boxSize='Medium' classname='medium-box' />
      <Box boxSize='Large' classname='large-box' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
