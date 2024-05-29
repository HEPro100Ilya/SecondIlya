import React, { useState } from 'react';
import axios from 'axios';
import { API_CREATE_DOC } from '../../utils/constants';

const CreateDoc = () => {
    const [docName, setDocName] = useState('');
    const [docContent, setDocContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', docName);
        formData.append('content', docContent);

        try {
            const response = await axios.post(API_CREATE_DOC, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Document created successfully');
        } catch (error) {
            console.error('There was an error creating the document!', error);
        }
    };

    return (
        <div>
            <h2>Create New Document</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Document Name:
                        <input
                            type="text"
                            value={docName}
                            onChange={(e) => setDocName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Document Content:
                        <textarea
                            value={docContent}
                            onChange={(e) => setDocContent(e.target.value)}
                            required
                        ></textarea>
                    </label>
                </div>
                <div>
                    <button type="submit">Create Document</button>
                </div>
            </form>
        </div>
    );
};

export default CreateDoc;
