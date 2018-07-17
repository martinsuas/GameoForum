const nav_items = [
    {key:"home",  name:"Home Page", link:""},
    {key:"forum", name:"Forum", link:""},
    {key:"users", name:"Users", link:""},
    {key:"about", name:"About", link:""},
]

const thread = {id:1, user:"ms7653", creationTime:"12/01/2019 17:43:21",
    userLink:"", threadLink:"", title:"How do I do this?"};

const threads = [
    thread, thread, thread, thread, thread, thread,
    thread, thread, thread, thread, thread, thread,
];

const message = {id: 1, user:"ms7653", message:"I dont know, sure try that",
    postingTime:"12/01/2019 17:43:21", userLink:""};

const messages = [
    message, message, message, message, message, message,
    message, message, message, message, message, message,
];

const forum = {id: 1, name:"Help", description:"Need help? Check here!",
    forumLink:""};

const forums = [
    forum, forum, forum, forum, forum, forum,
    forum, forum, forum, forum, forum, forum,
];

<div>
    <Header/>
    <p/>
    <Thread user={thread.user} creationTime={thread.creationTime}
            userLink={thread.userLink} threadLink={thread.threadLink} title={thread.title}
    />
    <p/>
    <ThreadList threads={threads}/>
    <p/>
    <Message user={message.user} postingTime={message.postingTime}
             userLink={message.userLink} message={message.message}
    />
    <p/>
    <MessageList messages={messages}/>
    <p/>
    <Forum name={forum.name} description={forum.description}
           forumLink={forum.forumLink}
    />
    <p/>
    <ForumList forums={forums}/>
</div>