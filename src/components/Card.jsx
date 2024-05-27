import './Card.css';

const Card = (props) => {

  // console.log(props.data);

  return (
    <div className="card">
     <div  className="card-header">
      <h6><small className="card-title">{props.data.type}</small></h6>
      <h1 className ="card-subtitle">${props.data.price}/month</h1>
      </div>
      <div className="card-text">
      {
        props.data.features.map((feature, index) => (
          <p key={index}>{feature.includes('x') ? '✗' : '✓'} {feature.replace('x', '')}</p>
        ))
      }
      </div>
      <button className="btn btn-primary">Button</button>
    </div>
  )
}

export default Card;