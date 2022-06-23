import classes from './List.module.css'

function List(props){

    return (
        <div className={classes.Note}>

            <img className={classes.Photo} width="230"
                 height="150"
                 src={props.photo}
                 alt='не работает'/>
            <h1 className={classes.Title}>{props.title}</h1>
            {/*<p className={classes.Content}>{props.content}</p>*/}
            <p className={classes.Price}>Цена: {props.price}&#8381;</p>
        </div>
    )
  }

export default List;