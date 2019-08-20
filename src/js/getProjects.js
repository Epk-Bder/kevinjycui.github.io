const portfolio = [
    {'name':'ENFERI', 'desc':'', 'source':'src/img/work-img.JPG', 'repo':'https://github.com/kevinjycui/enferi'},
    {'name':'Evolution Simulator', 'desc':'', 'source':'src/img/guppy.PNG', 'repo':'https://github.com/kevinjycui/Trinidad-Guppies'},
    {'name':'BFS Pacman', 'desc':'', 'source':'src/img/bfs_logo.PNG', 'repo':'https://github.com/kevinjycui/pac-graph'},
    {'name':'Dijkstra Transportation Network', 'desc':'', 'source':'src/img/map_visual.jpg', 'repo':'https://github.com/kevinjycui/Dijkstra-Transportation-Network'},
    {'name':'Geopoli', 'desc':'', 'source':'src/img/geopoli.png', 'repo':'https://github.com/kevinjycui/Geopoli'},
    {'name':'Human Anatomy Model w/ Unity', 'desc':'', 'source':'src/img/human.jpg', 'repo':'https://github.com/kevinjycui/human-anatomy-model'},
]

for (e of portfolio) {
    let link = document.createElement("a");
    link.href = e.repo;
    link.target = '_blank';
    let profile = document.createElement("div");
    profile.className = "eventModule";
    let head = document.createElement("h4");
    head.className = "event-name";
    head.append(document.createTextNode(e.name))
    let subtext = document.createElement("a");
    subtext.className = "event-descrip";
    subtext.append(document.createTextNode(e.desc));
    profile.appendChild(head);
    profile.appendChild(subtext);
    profile.style.backgroundImage = "url("+e.source+")";
    link.appendChild(profile);
    let element = document.getElementById("event-dir");
    element.appendChild(link)
}
