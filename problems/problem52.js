// const folders = [
// 	{ id: 1, name: "My Computer", folderId: undefined }, 
// 	{ id: 2, name: "Home", folderId: 1 },
// 	{ id: 3, name: "Folder #3", folderId: 1 }, 
// 	{ id: 4, name: "New folder", folderId: 3 }, 
// 	{ id: 5, name: "Yet another folder", folderId: 2 }, 
// 	{ id: 6, name: "Last folder", folderId: 4 }, 
// ]
// let filePath = '';

// // exit case
// const getFilePath = (folderId) => {
// 	// folders.find(path => path.id === folderId);
// 	const path = folders.find(path => path.id === folderId);
// 	if(!path.folderId){
// 		return '/'
// 	};
// };

// console.log(getFilePath(1));


const folders = [
	{ id: 1, name: "My Computer", folderId: undefined }, 
	{ id: 2, name: "Home", folderId: 1 },
	{ id: 3, name: "Folder #3", folderId: 1 }, 
	{ id: 4, name: "New folder", folderId: 3 }, 
	{ id: 5, name: "Yet another folder", folderId: 2 }, 
	{ id: 6, name: "Last folder", folderId: 4 }, 
]

const getFilePath = (folderId, currentPath) => {
	// folders.find(path => path.id === folderId);
	const path = folders.find(path => path.id === folderId);

	if(!path.folderId){
		if(!currentPath){
			return '/'
		}else{
			return currentPath
		}
	} else {
		const parentFolder = folders.find(folder => folder.id === path.folderId);
		const newPath =  parentFolder.name + '/' + (currentPath ? currentPath : '');
		return getFilePath(path.folderId, newPath);
	}
};

console.log(getFilePath(4));