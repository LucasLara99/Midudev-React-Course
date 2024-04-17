import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <>
            <TwitterFollowCard name='Lucas' userName='lucario' />
            <TwitterFollowCard name="Nacho" userName="nachete45" />
            <TwitterFollowCard name={'Luiso'} userName={'Luisete'} />
            <TwitterFollowCard name={"Lucia"} userName={"Lusilu99"} />
        </>
    )
}