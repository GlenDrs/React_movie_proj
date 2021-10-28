import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Donner quelque ressource pour webpack!',
			date: '18/09/2021',
		},
		{
			id: nanoid(),
			text: 'Se débrouiller pour donner des ressources avec bugs et pretendre que c normale!',
			date: '19/09/2021',
		},
		{
			id: nanoid(),
			text: 'Pas de ressources, laisser les /students/ sans aucun indice et même pas un minimum de soutien!',
			date: '20/09/2021',
		},
		{
			id: nanoid(),
			text: 'Ouff, journee de projet, au moins les étudiants vont pas comprendre que THP ne seve pas à grand chose!',
			date: '21/09/2021',
		},
    {
    	id: nanoid(),
    	text: 'On a rien foutu pour les /students/. E bah THP seve à rien!',
    	date: '22/09/2021',
    },
    {
    	id: nanoid(),
    	text: 'La semaine dernière on c bien débrouillé en donnant des megres sources et de pseudo-soutien!',
    	date: '25/09/2021',
    },
    {
    	id: nanoid(),
    	text: 'Allez le React cache mieux le fait que on fait presque rien pour former!',
    	date: '26/09/2021',
    },
    {
    	id: nanoid(),
    	text: 'Bientôt Noël,on a fait plein de thune en dépensant trop, top peu!',
    	date: '19/12/2021',
    },
    {
   	 id: nanoid(),
    	text: 'Ils sont vrm cons pour avoir rien compris que on les a presque volé!',
    	date: '20/12/2021',
    },
    {
    	id: nanoid(),
    	text: 'Cérise sur le gateau... on les a même traité de Muthe Fuckers!',
    	date: '21/12/2021',
    },
]);

	const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
