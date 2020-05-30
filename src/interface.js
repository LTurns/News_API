story = new News();

function update(mainStory) {
	document.getElementById('oneNote').innerHTML = story.viewOne(mainStory);
	document.getElementById('allNotes').innerHTML = story.viewAll();
}
