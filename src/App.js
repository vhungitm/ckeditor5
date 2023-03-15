import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useState } from 'react';
import ClassicEditor from './components/ckeditor5/build/ckeditor';

const App = () => {
	const [data, setData] = useState();

	return (
		<div>
			<CKEditor
				editor={ClassicEditor}
				data={data}
				onReady={editor => {
					// You can store the "editor" and use when it is needed.
					console.log('Editor is ready to use!', editor);
				}}
				onChange={(event, editor) => {
					setData(editor.getData());
				}}
			/>
			<div dangerouslySetInnerHTML={{ __html: data }} />
		</div>
	);
};

export default App;
