import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
    <div style={{ height: '100vh' }}>
        <PrettyChatWindow
            projectId="3da3ecc2-06e9-418f-acaf-779ca392c328"
            username={props.user.username}
            secret={props.user.username}
            style={{ height: '100%' }}
        />
    </div>
    )
}

export default ChatsPage