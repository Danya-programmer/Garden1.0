import {useState, useEffect, useMemo} from "react";
import axios from "axios";
import classes from '../styles/CatalogOfPlants.module.css'
import Header from "../conponents/UI/Header/Header";
import List from "../conponents/UI/List/List";
import MySelect from "../conponents/UI/MySelect/MySelect";
import MyInput from "../conponents/UI/input/MyInput";

function Note() {
    const [notes , setNewNotes] = useState([]) // работа с записями
    const [selectedSort, setSelectedSort] = useState('') // работа с сортировкой
    const [searchQuery, setSearchQuery] = useState('')


    // function getSortedPosts() { //3
    //     if(selectedSort){
    //         return [...notes].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    //     }
    //     return notes;
    // }

    // const sortedNotes = [...notes].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])) //2
    // const sortedNotes = getSortedPosts() //4
    const sortedNotes = useMemo( () =>{ //5
        if(selectedSort){
            return [...notes].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return notes;

        }, [selectedSort, notes]);

    const sortedAndSearchedPosts = useMemo(() => { //6
        return sortedNotes.filter(notes => notes.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedNotes])

    useEffect(() => {
      getNotes()
        } ,[])
    const SortNotes = (sort) => {
        setSelectedSort(sort)

        // setNewNotes([...notes].sort((a, b) => a[sort].localeCompare(b[sort]))) было но перекачевало в sortedNotes
    }

    function getNotes() {
      axios({
          method: "GET",
          // url:"https://jsonplaceholder.typicode.com/posts",
          url:"plants/",
        }).then((response)=>{
          const data = response.data
          setNewNotes(data)
        }).catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        })}

  return (
     <div className='Page'>
        <Header/>
        <section>
         <div className={classes.Sort}>
             <MyInput className={classes.Input}
                 value={searchQuery}
                 onChange={event => setSearchQuery(event.target.value)}
             placeholder='Поиск...'
             />
             <div>
            <p>Результаты поиска: Сортировать:</p>
             <MySelect
                value={selectedSort}
                onChange={SortNotes}
                defaultValue='выбрать'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'price', name: 'По возрастанию цены'},
                ]}
             />
             <hr/></div>

         </div>
         {sortedAndSearchedPosts.length ?
          <div className={classes.Notes}>{ sortedAndSearchedPosts && sortedAndSearchedPosts.map(note => <List
        key={note.id}
        id={note.id}
        title={note.title}
        content={note.content}
        photo={note.image}
        price={note.price}
        />

        )}</div> : <h2>Посты нет</h2>}

        </section>
    </div>

  );
}

export default Note;