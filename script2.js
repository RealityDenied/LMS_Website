const imgbutton = document.querySelector(".svgclick");
const courseDiv = document.querySelector(".courseDiv");
const leftDiv = document.querySelector(".left");
let sectionCount = 0;
let sectionsArray = [];

class Video {
    constructor(name, length, sectionDiv) {
        this.name = name;
        this.length = length;
        this.sectionDiv = sectionDiv;
        this.createVideo();
    }
    createVideo() {
        this.b = document.createElement("div");
        this.updateVideoName();
        this.sectionDiv.appendChild(this.b);
        this.b.classList.add("courseDiv");
        this.b.addEventListener('click', (event) => {
            if (event.target.classList.contains('pencilClick')) {
                this.showInputBox();
            }
        });
    }
    updateVideoName() {
        this.b.innerHTML = `
        <div class="spaced">${this.name}
        <img src="./pencil.svg" width="24" height="24" class="pencilClick"></div>
        `;
    }
    showInputBox() {
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.value = this.name;
        const spacedElement = this.b.querySelector(".spaced");
        spacedElement.innerHTML = '';
        spacedElement.appendChild(inputElement);
        inputElement.select();
        inputElement.focus();
        inputElement.addEventListener('input', () => {
            this.name = inputElement.value;
        })
        inputElement.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.updateVideoName();
            }

        })
    }
}

class Section {
    constructor(name) {
        this.name = name;
        this.id = sectionCount;
        this.videos = [];
        this.videoIndex = 0;
        this.createSection();
    }

    createSection() {
        const sectionDiv = document.createElement("div");
        sectionCount++;
        sectionDiv.innerHTML = `
        <div class="spaced">Section ${sectionCount} - ${this.name}
        <img src="./plus.svg" width="24" height="24" class="plusClick">
        </div>
        `;
        leftDiv.appendChild(sectionDiv);
        sectionDiv.classList.add("courseDiv");
        const plusElement = sectionDiv.querySelector('.plusClick');
        plusElement.addEventListener("click", () => {
            this.videoIndex++;
            let video = new Video("Video " + this.videoIndex, 4, sectionDiv);
            this.videos.push(video);
        })
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        let section1 = new Section("hello");
        sectionsArray.push(section1);
    }
})