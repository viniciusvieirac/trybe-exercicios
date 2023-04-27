import PropTypes from 'prop-types';
import read from '../icons/read.svg';
import unRead from '../icons/unread.svg';


function List({messages, setMessageStatus}) {
    return (

            <ul className='messages-list'>
                {messages.map((message) =>  {
                    const messageClass = message.status === 1 ? 'message-read' : 'message-unread'
                    return (
                    <li key={message.id}><p className={`message-title ${messageClass}`}>{message.title}</p>
                            
                        <div>
                            <button type="button"
                                    title="Marcar como lida"
                                    onClick={ () => setMessageStatus(message.id, 1) }>
                                        <img src={read} alt="" />
                            </button>
                            <button type="button"
                                    title="Marcar como não lida"
                                    onClick={ () => setMessageStatus(message.id, 0) }>
                                        <img src={unRead} alt="" />
                            </button>
                           
                        </div>
                    </li>

                )})}
            </ul>
    );
}

List.propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({})
).isRequired,
setMessageStatus: PropTypes.func.isRequired,
}

export default List;