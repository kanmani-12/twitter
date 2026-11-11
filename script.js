/* =====================================================
   MINITWIT
===================================================== */


/* ================= USER ================= */

let user = {
    name: "Shalini",
    username: "@shalini",
    bio: "Student • Developer • Learner 💙"
};


/* ================= POSTS ================= */

let posts = [

    {
        id: 1,
        name: "Rahul",
        username: "@rahul",
        text: "Finally completed my web development project! 🎉",
        likes: 20,
        liked: false,
        media: true,

        comments: [
            {
                name: "Shalini",
                username: "@shalini",
                text: "Great work Rahul! 🔥"
            },
            {
                name: "Meera",
                username: "@meera",
                text: "Congratulations! ❤️"
            },
            {
                name: "Kalish",
                username: "@kalish",
                text: "Amazing project!"
            }
        ]
    },


    {
        id: 2,
        name: "Meera",
        username: "@meera",
        text: "Learning JavaScript every day 💻",
        likes: 15,
        liked: false,
        media: true,

        comments: [
            {
                name: "Rahul",
                username: "@rahul",
                text: "Keep learning! 👍"
            },
            {
                name: "Anu",
                username: "@anu",
                text: "All the best!"
            }
        ]
    },


    {
        id: 3,
        name: "Kalish",
        username: "@kalish",
        text: "Good vibes and good friends ✨",
        likes: 10,
        liked: true,
        media: true,

        comments: [
            {
                name: "Shalini",
                username: "@shalini",
                text: "Nice post 💙"
            },
            {
                name: "Anu",
                username: "@anu",
                text: "Love this!"
            }
        ]
    },


    {
        id: 4,
        name: "Anu",
        username: "@anu",
        text: "Working on something exciting today 🚀",
        likes: 8,
        liked: false,
        media: false,

        comments: [
            {
                name: "Meera",
                username: "@meera",
                text: "Can't wait to see it!"
            },
            {
                name: "Rahul",
                username: "@rahul",
                text: "All the best!"
            }
        ]
    },


    {
        id: 5,
        name: "Shalini",
        username: "@shalini",
        text: "Building my MiniTwit project 💙",
        likes: 25,
        liked: true,
        media: true,

        comments: [
            {
                name: "Rahul",
                username: "@rahul",
                text: "Looks great!"
            },
            {
                name: "Meera",
                username: "@meera",
                text: "Nice work Shalini ❤️"
            },
            {
                name: "Anu",
                username: "@anu",
                text: "Very nice!"
            }
        ]
    }

];


/* ================= FOLLOWERS ================= */

let followers = [

    {
        name: "Rahul",
        username: "@rahul"
    },

    {
        name: "Meera",
        username: "@meera"
    },

    {
        name: "Kalish",
        username: "@kalish"
    },

    {
        name: "Anu",
        username: "@anu"
    }

];


/* ================= FOLLOWING ================= */

let following = [

    {
        name: "Rahul",
        username: "@rahul"
    },

    {
        name: "Meera",
        username: "@meera"
    },

    {
        name: "Kalish",
        username: "@kalish"
    }

];


/* ================= SUGGESTIONS ================= */

let suggestedPeople = [

    ["Rahul", "@rahul"],
    ["Meera", "@meera"],
    ["Kalish", "@kalish"],
    ["Anu", "@anu"]

];


/* ================= CONVERSATIONS ================= */

let conversations = [

    {
        name: "Rahul",
        username: "@rahul",
        lastMessage: "Hey! How are you?",
        time: "10:30 AM",

        messages: [
            {
                sender: "them",
                text: "Hey Shalini! 👋"
            },
            {
                sender: "me",
                text: "Hi Rahul! I'm good 😊"
            },
            {
                sender: "them",
                text: "How is your project going?"
            }
        ]
    },


    {
        name: "Meera",
        username: "@meera",
        lastMessage: "Check this project!",
        time: "Yesterday",

        messages: [
            {
                sender: "them",
                text: "Hi Shalini!"
            },
            {
                sender: "me",
                text: "Hi Meera ❤️"
            },
            {
                sender: "them",
                text: "Check this project!"
            }
        ]
    },


    {
        name: "Kalish",
        username: "@kalish",
        lastMessage: "See you tomorrow!",
        time: "Yesterday",

        messages: [
            {
                sender: "them",
                text: "Are you coming tomorrow?"
            },
            {
                sender: "me",
                text: "Yes 👍"
            },
            {
                sender: "them",
                text: "See you tomorrow!"
            }
        ]
    },


    {
        name: "Anu",
        username: "@anu",
        lastMessage: "Good night 😊",
        time: "Mon",

        messages: [
            {
                sender: "them",
                text: "How was your day?"
            },
            {
                sender: "me",
                text: "It was good!"
            },
            {
                sender: "them",
                text: "Good night 😊"
            }
        ]
    }

];


/* ================= NAVIGATION ================= */

let currentScreen = "login";

let navigationHistory = [];

let currentPostId = null;

let currentChatIndex = null;

let currentProfileTab = "posts";


function navigateTo(screenId) {

    if (currentScreen !== screenId) {

        navigationHistory.push(currentScreen);

    }

    showScreen(screenId);
}


function goBack(defaultScreen = "home") {

    if (navigationHistory.length > 0) {

        let previous =
            navigationHistory.pop();

        showScreen(previous);

    } else {

        showScreen(defaultScreen);

    }
}


function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(function(screen) {

            screen.classList.remove("active");

        });


    let screen =
        document.getElementById(screenId);


    if (!screen) {
        return;
    }


    screen.classList.add("active");

    currentScreen = screenId;


    let bottomNav =
        document.getElementById("bottomNav");

    let floating =
        document.getElementById("floatingPost");


    if (
        screenId === "login" ||
        screenId === "signup" ||
        screenId === "editProfile" ||
        screenId === "chat"
    ) {

        bottomNav.style.display = "none";
        floating.style.display = "none";

    } else {

        bottomNav.style.display = "flex";
        floating.style.display = "block";

    }


    if (screenId === "home") {
        loadFeed();
    }


    if (screenId === "profile") {
        loadProfile(currentProfileTab);
    }


    if (screenId === "followers") {
        loadFollowers();
    }


    if (screenId === "following") {
        loadFollowing();
    }


    if (screenId === "explore") {
        loadSuggestions();
    }


    if (screenId === "messages") {
        loadMessages();
    }


    if (screenId === "chat") {
        loadChat();
    }


    if (screenId === "comments") {
        loadComments();
    }

}


/* ================= LOGIN ================= */

document
    .getElementById("loginBtn")
    .addEventListener("click", function() {

        navigationHistory = [];

        showScreen("home");

    });


/* ================= SIGNUP ================= */

document
    .getElementById("signupBtn")
    .addEventListener("click", function() {

        navigateTo("signup");

    });


document
    .getElementById("signupBack")
    .addEventListener("click", function() {

        goBack("login");

    });


document
    .getElementById("registerBtn")
    .addEventListener("click", function() {

        let name =
            document
                .getElementById("signupName")
                .value
                .trim();


        let username =
            document
                .getElementById("signupUsername")
                .value
                .trim();


        let password =
            document
                .getElementById("signupPassword")
                .value
                .trim();


        if (!name) {
            alert("Enter your name.");
            return;
        }


        if (!username) {
            alert("Enter username.");
            return;
        }


        if (!password) {
            alert("Enter password.");
            return;
        }


        if (!username.startsWith("@")) {
            username = "@" + username;
        }


        user.name = name;
        user.username = username;


        navigationHistory = [];

        showScreen("home");

    });


/* ================= BOTTOM NAV ================= */

document
    .getElementById("navHome")
    .addEventListener("click", function() {

        navigationHistory = [];

        showScreen("home");

    });


document
    .getElementById("navExplore")
    .addEventListener("click", function() {

        navigationHistory = [];

        showScreen("explore");

    });


document
    .getElementById("navNotifications")
    .addEventListener("click", function() {

        navigationHistory = [];

        showScreen("notifications");

    });


document
    .getElementById("navMessages")
    .addEventListener("click", function() {

        navigationHistory = [];

        showScreen("messages");

    });


document
    .getElementById("navProfile")
    .addEventListener("click", function() {

        navigationHistory = [];

        showScreen("profile");

    });


/* ================= HEADER NAVIGATION ================= */

document
    .getElementById("homeProfile")
    .addEventListener("click", function() {

        navigateTo("profile");

    });


document
    .getElementById("exploreBack")
    .addEventListener("click", function() {

        goBack("home");

    });


document
    .getElementById("notificationBack")
    .addEventListener("click", function() {

        goBack("home");

    });


document
    .getElementById("messageBack")
    .addEventListener("click", function() {

        goBack("home");

    });


document
    .getElementById("profileBack")
    .addEventListener("click", function() {

        goBack("home");

    });


/* ================= POST ================= */

document
    .getElementById("postBtn")
    .addEventListener("click", function() {

        let text =
            document
                .getElementById("postText")
                .value
                .trim();


        if (!text) {

            alert("Write something first.");

            return;

        }


        posts.unshift({

            id: Date.now(),

            name: user.name,

            username: user.username,

            text: text,

            likes: 0,

            liked: false,

            media: false,

            comments: []

        });


        document
            .getElementById("postText")
            .value = "";


        loadFeed();

    });


/* ================= POST HTML ================= */

function createPostHTML(post) {

    let mediaHTML =
        post.media
        ? `<div class="post-media">🖼️</div>`
        : "";


    let likeIcon =
        post.liked
        ? "❤️"
        : "♡";


    return `

        <article class="post">

            <div class="avatar">
                ${post.name.charAt(0).toUpperCase()}
            </div>


            <div class="post-body">

                <div class="post-header">

                    <b>${post.name}</b>

                    <span>${post.username}</span>

                    <span>· 1h</span>

                </div>


                <p class="post-text">
                    ${post.text}
                </p>


                ${mediaHTML}


                <div class="post-actions">

                    <button
                        class="comment-action"
                        data-id="${post.id}">
                        💬 ${post.comments.length}
                    </button>


                    <button>
                        🔁 0
                    </button>


                    <button
                        class="like-action"
                        data-id="${post.id}">
                        ${likeIcon} ${post.likes}
                    </button>


                    <button>
                        ↗
                    </button>

                </div>

            </div>

        </article>

    `;

}


/* ================= FEED ================= */

function loadFeed() {

    let feed =
        document.getElementById("feed");


    feed.innerHTML = "";


    posts.forEach(function(post) {

        feed.innerHTML +=
            createPostHTML(post);

    });


    document
        .getElementById("homeAvatar")
        .textContent =
            user.name.charAt(0).toUpperCase();

}


/* ================= LIKE ================= */

function toggleLike(id) {

    let post =
        posts.find(function(item) {

            return item.id === id;

        });


    if (!post) {
        return;
    }


    if (post.liked) {

        post.liked = false;

        post.likes--;

    } else {

        post.liked = true;

        post.likes++;

    }


    if (currentScreen === "home") {
        loadFeed();
    }

    else if (currentScreen === "profile") {
        loadProfile(currentProfileTab);
    }

    else if (currentScreen === "comments") {
        loadComments();
    }

}


/* ================= POST BUTTON EVENTS ================= */

document.addEventListener("click", function(event) {

    let commentButton =
        event.target.closest(".comment-action");


    if (commentButton) {

        let id =
            Number(commentButton.dataset.id);


        openComments(id);

        return;

    }


    let likeButton =
        event.target.closest(".like-action");


    if (likeButton) {

        let id =
            Number(likeButton.dataset.id);


        toggleLike(id);

    }

});


/* ================= COMMENTS ================= */

function openComments(id) {

    let post =
        posts.find(function(item) {

            return item.id === id;

        });


    if (!post) {
        return;
    }


    currentPostId = id;

    navigateTo("comments");

}


function loadComments() {

    let post =
        posts.find(function(item) {

            return item.id === currentPostId;

        });


    if (!post) {
        return;
    }


    document
        .getElementById("selectedPost")
        .innerHTML =
            createPostHTML(post);


    document
        .getElementById("commentAvatar")
        .textContent =
            user.name.charAt(0).toUpperCase();


    let list =
        document.getElementById("commentsList");


    list.innerHTML = "";


    post.comments.forEach(function(comment) {

        list.innerHTML += `

            <div class="comment">

                <div class="avatar">
                    ${comment.name.charAt(0).toUpperCase()}
                </div>

                <div class="comment-content">

                    <b>${comment.name}</b>

                    <small>
                        ${comment.username}
                    </small>

                    <p>
                        ${comment.text}
                    </p>

                </div>

            </div>

        `;

    });

}


function addComment() {

    let input =
        document.getElementById("commentInput");


    let text =
        input.value.trim();


    if (!text) {

        alert("Write a comment.");

        return;

    }


    let post =
        posts.find(function(item) {

            return item.id === currentPostId;

        });


    if (!post) {
        return;
    }


    post.comments.push({

        name: user.name,

        username: user.username,

        text: text

    });


    input.value = "";


    loadComments();

}


document
    .getElementById("commentBtn")
    .addEventListener("click", addComment);


document
    .getElementById("commentInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            addComment();

        }

    });


document
    .getElementById("commentsBack")
    .addEventListener("click", function() {

        goBack("home");

    });


/* =====================================================
   MESSAGES
===================================================== */

function loadMessages() {

    let list =
        document.getElementById("messageList");


    list.innerHTML = "";


    conversations.forEach(function(chat, index) {

        list.innerHTML += `

            <div class="message-item"
                 data-chat="${index}">

                <div class="avatar">
                    ${chat.name.charAt(0).toUpperCase()}
                </div>

                <div class="message-info">

                    <b>${chat.name}</b>

                    <p>
                        ${chat.lastMessage}
                    </p>

                </div>

                <span class="message-time">
                    ${chat.time}
                </span>

            </div>

        `;

    });


    document
        .querySelectorAll(".message-item")
        .forEach(function(item) {

            item.addEventListener("click", function() {

                currentChatIndex =
                    Number(item.dataset.chat);


                navigateTo("chat");

            });

        });

}


/* ================= CHAT ================= */

function loadChat() {

    if (currentChatIndex === null) {
        return;
    }


    let chat =
        conversations[currentChatIndex];


    if (!chat) {
        return;
    }


    document
        .getElementById("chatTitle")
        .textContent =
            chat.name;


    let container =
        document.getElementById("chatMessages");


    container.innerHTML = "";


    chat.messages.forEach(function(message) {

        let mine =
            message.sender === "me";


        container.innerHTML += `

            <div class="chat-row ${mine ? "mine" : ""}">

                <div class="chat-bubble">

                    ${message.text}

                </div>

            </div>

        `;

    });


    container.scrollTop =
        container.scrollHeight;

}


function sendChatMessage() {

    let input =
        document.getElementById("chatInput");


    let text =
        input.value.trim();


    if (!text) {
        return;
    }


    if (currentChatIndex === null) {
        return;
    }


    conversations[currentChatIndex]
        .messages.push({

            sender: "me",

            text: text

        });


    conversations[currentChatIndex]
        .lastMessage = text;


    input.value = "";


    loadChat();

}


document
    .getElementById("sendMessage")
    .addEventListener("click", sendChatMessage);


document
    .getElementById("chatInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendChatMessage();

        }

    });


document
    .getElementById("chatBack")
    .addEventListener("click", function() {

        goBack("messages");

    });


/* =====================================================
   PROFILE
===================================================== */

function updateFollowCounts() {

    document
        .getElementById("followersCount")
        .textContent =
            followers.length;


    document
        .getElementById("followingCount")
        .textContent =
            following.length;

}


function loadProfile(tab) {

    currentProfileTab = tab;


    document
        .getElementById("profileName")
        .textContent =
            user.name;


    document
        .getElementById("profileUsername")
        .textContent =
            user.username;


    document
        .getElementById("profileBio")
        .textContent =
            user.bio;


    document
        .getElementById("profileAvatar")
        .textContent =
            user.name.charAt(0).toUpperCase();


    updateFollowCounts();


    document
        .querySelectorAll(".profile-tab")
        .forEach(function(button) {

            button.classList.toggle(
                "active",
                button.dataset.tab === tab
            );

        });


    let ownPosts =
        posts.filter(function(post) {

            return post.username === user.username;

        });


    let displayPosts = [];


    if (tab === "posts") {

        displayPosts = ownPosts;

    }


    if (tab === "media") {

        displayPosts =
            ownPosts.filter(function(post) {

                return post.media;

            });

    }


    if (tab === "likes") {

        displayPosts =
            posts.filter(function(post) {

                return post.liked;

            });

    }


    if (tab === "replies") {

        ownPosts.forEach(function(post) {

            post.comments.forEach(function(comment) {

                if (
                    comment.username === user.username
                ) {

                    displayPosts.push({

                        id: Date.now() + Math.random(),

                        name: user.name,

                        username: user.username,

                        text: "Reply: " + comment.text,

                        likes: 0,

                        liked: false,

                        media: false,

                        comments: []

                    });

                }

            });

        });

    }


    let container =
        document.getElementById("profilePosts");


    container.innerHTML = "";


    if (displayPosts.length === 0) {

        container.innerHTML = `

            <div class="empty">

                <h3>Nothing here yet</h3>

                <p>
                    Your ${tab} will appear here.
                </p>

            </div>

        `;

        return;

    }


    displayPosts.forEach(function(post) {

        container.innerHTML +=
            createPostHTML(post);

    });

}


/* ================= PROFILE TABS ================= */

document
    .querySelectorAll(".profile-tab")
    .forEach(function(button) {

        button.addEventListener("click", function() {

            loadProfile(button.dataset.tab);

        });

    });


/* =====================================================
   EDIT PROFILE
===================================================== */

document
    .getElementById("editProfileBtn")
    .addEventListener("click", function() {

        document
            .getElementById("editName")
            .value =
                user.name;


        document
            .getElementById("editUsername")
            .value =
                user.username;


        document
            .getElementById("editBio")
            .value =
                user.bio;


        document
            .getElementById("editAvatar")
            .textContent =
                user.name.charAt(0).toUpperCase();


        navigateTo("editProfile");

    });


document
    .getElementById("editCancel")
    .addEventListener("click", function() {

        goBack("profile");

    });


document
    .getElementById("saveProfile")
    .addEventListener("click", function() {

        let oldUsername =
            user.username;


        let name =
            document
                .getElementById("editName")
                .value
                .trim();


        let username =
            document
                .getElementById("editUsername")
                .value
                .trim();


        let bio =
            document
                .getElementById("editBio")
                .value
                .trim();


        if (!name || !username) {

            alert("Name and username are required.");

            return;

        }


        if (!username.startsWith("@")) {

            username = "@" + username;

        }


        user.name = name;

        user.username = username;

        user.bio = bio;


        posts.forEach(function(post) {

            if (post.username === oldUsername) {

                post.name = user.name;

                post.username = user.username;

            }


            post.comments.forEach(function(comment) {

                if (
                    comment.username === oldUsername
                ) {

                    comment.name = user.name;

                    comment.username =
                        user.username;

                }

            });

        });


        goBack("profile");

    });


/* =====================================================
   FOLLOWERS
===================================================== */

document
    .getElementById("followersBtn")
    .addEventListener("click", function() {

        navigateTo("followers");

    });


document
    .getElementById("followersBack")
    .addEventListener("click", function() {

        goBack("profile");

    });


function loadFollowers() {

    let container =
        document.getElementById("followersList");


    container.innerHTML = "";


    if (followers.length === 0) {

        container.innerHTML = `

            <div class="empty">

                <h3>No followers</h3>

                <p>
                    People who follow you will appear here.
                </p>

            </div>

        `;

        return;

    }


    followers.forEach(function(person) {

        let chatIndex =
            conversations.findIndex(function(chat) {

                return chat.username === person.username;

            });


        container.innerHTML += `

            <div class="person">

                <div class="avatar">
                    ${person.name.charAt(0).toUpperCase()}
                </div>

                <div class="person-info">

                    <b>${person.name}</b>

                    <span>
                        ${person.username}
                    </span>

                </div>


                ${
                    chatIndex !== -1

                    ? `
                        <button
                            class="message-person-btn"
                            data-username="${person.username}">
                            Message
                        </button>
                      `

                    : ""
                }

            </div>

        `;

    });


    document
        .querySelectorAll(".message-person-btn")
        .forEach(function(button) {

            button.addEventListener("click", function(event) {

                event.stopPropagation();


                let username =
                    button.dataset.username;


                let index =
                    conversations.findIndex(
                        function(chat) {

                            return chat.username === username;

                        }
                    );


                if (index !== -1) {

                    currentChatIndex = index;

                    navigateTo("chat");

                }

            });

        });

}


/* =====================================================
   FOLLOWING
===================================================== */

document
    .getElementById("followingBtn")
    .addEventListener("click", function() {

        navigateTo("following");

    });


document
    .getElementById("followingBack")
    .addEventListener("click", function() {

        goBack("profile");

    });


function loadFollowing() {

    let container =
        document.getElementById("followingList");


    container.innerHTML = "";


    if (following.length === 0) {

        container.innerHTML = `

            <div class="empty">

                <h3>Not following anyone</h3>

                <p>
                    People you follow will appear here.
                </p>

            </div>

        `;

        return;

    }


    following.forEach(function(person, index) {

        container.innerHTML += `

            <div class="person">

                <div class="avatar">
                    ${person.name.charAt(0).toUpperCase()}
                </div>

                <div class="person-info">

                    <b>${person.name}</b>

                    <span>
                        ${person.username}
                    </span>

                </div>


                <button
                    class="unfollow-btn"
                    data-index="${index}">

                    Following

                </button>

            </div>

        `;

    });


    document
        .querySelectorAll(".unfollow-btn")
        .forEach(function(button) {

            button.addEventListener("click", function(event) {

                event.stopPropagation();


                let index =
                    Number(button.dataset.index);


                if (
                    index >= 0 &&
                    index < following.length
                ) {

                    following.splice(index, 1);

                    loadFollowing();

                    updateFollowCounts();

                    loadSuggestions();

                }

            });

        });

}


/* =====================================================
   EXPLORE FOLLOW / UNFOLLOW
===================================================== */

function loadSuggestions() {

    let container =
        document.getElementById("suggestions");


    container.innerHTML = "";


    suggestedPeople.forEach(function(person, index) {

        let isFollowing =
            following.some(function(item) {

                return item.username === person[1];

            });


        container.innerHTML += `

            <div class="suggestion">

                <div class="avatar">
                    ${person[0].charAt(0).toUpperCase()}
                </div>


                <div class="suggestion-info">

                    <b>${person[0]}</b>

                    <span>
                        ${person[1]}
                    </span>

                </div>


                <button
                    class="follow-btn
                    ${isFollowing ? "following" : ""}"
                    data-index="${index}">

                    ${
                        isFollowing
                        ? "Following"
                        : "Follow"
                    }

                </button>

            </div>

        `;

    });


    document
        .querySelectorAll(".follow-btn")
        .forEach(function(button) {

            button.addEventListener("click", function() {

                let index =
                    Number(button.dataset.index);


                let person =
                    suggestedPeople[index];


                let existingIndex =
                    following.findIndex(function(item) {

                        return item.username === person[1];

                    });


                if (existingIndex !== -1) {

                    following.splice(
                        existingIndex,
                        1
                    );

                } else {

                    following.push({

                        name: person[0],

                        username: person[1]

                    });

                }


                loadSuggestions();

                updateFollowCounts();

            });

        });

}


/* =====================================================
   SEARCH
===================================================== */

document
    .getElementById("searchInput")
    .addEventListener("input", function() {

        let value =
            this.value.toLowerCase();


        document
            .querySelectorAll(".suggestion")
            .forEach(function(item) {

                item.style.display =
                    item.textContent
                        .toLowerCase()
                        .includes(value)
                        ? "flex"
                        : "none";

            });

    });


/* =====================================================
   NOTIFICATIONS
===================================================== */

document
    .getElementById("notificationProfile")
    .addEventListener("click", function() {

        navigateTo("profile");

    });


document
    .getElementById("notificationLike")
    .addEventListener("click", function() {

        navigateTo("profile");

    });


document
    .getElementById("notificationFollow")
    .addEventListener("click", function() {

        navigateTo("followers");

    });


/* =====================================================
   FLOATING POST
===================================================== */

document
    .getElementById("floatingPost")
    .addEventListener("click", function() {

        if (currentScreen !== "home") {

            navigateTo("home");

        }


        setTimeout(function() {

            document
                .getElementById("postText")
                .focus();

        }, 100);

    });


/* =====================================================
   START
===================================================== */

showScreen("login");