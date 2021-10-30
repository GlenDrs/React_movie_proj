import { useState } from 'react';
import ReactMarkdown from "react-markdown";
import React, { Component } from "react";
import Markdown from "react-textarea-markdown";

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
		
	};

	return (
		
		<div className='note-new'>
			<Markdown textarea   
				rows='8'
				cols='10'
				placeholder='Ajoutter votre RDV'
				value={noteText}
				onChange={handleChange} 
			/>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>

				

		
		

	);
};

export default AddNote;
