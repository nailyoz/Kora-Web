// IMPORTS
import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

// CSS
import './styles.css'
import 'semantic-ui-css/semantic.min.css'


const MuiComment = () => (
     <Comment.Group size='large'>
          <Header as='h3' dividing>
               Aprimore o passo
          </Header>

          <Comment className='card-comment'>
               <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
               <Comment.Content>
                    <Comment.Author as='a'>Álisson</Comment.Author>
                    <Comment.Metadata>
                         <div>Hoje às 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>Ficou incrível!</Comment.Text>
                    <Comment.Actions>
                         <Comment.Action>Responder</Comment.Action>
                    </Comment.Actions>
               </Comment.Content>
          </Comment>

          <Comment>
               <Comment className='card-comment'>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    <Comment.Content>
                         <Comment.Author as='a'>Matheus</Comment.Author>
                         <Comment.Metadata>
                              <div>Ontem às 12:30AM</div>
                         </Comment.Metadata>
                         <Comment.Text>
                              <p>Incrível Ana! Fico feliz que tenha gostado!</p>
                         </Comment.Text>
                         <Comment.Actions>
                              <Comment.Action>Responder</Comment.Action>
                         </Comment.Actions>
                    </Comment.Content>
               </Comment>

               <Comment.Group>
                    <Comment className='card-comment'>
                         <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                         <Comment.Content>
                              <Comment.Author as='a'>Naily</Comment.Author>
                              <Comment.Metadata>
                                   <div>Agora mesmo</div>
                              </Comment.Metadata>
                              <Comment.Text>Você põe bastante força no movimento peitoral do segundo passo, na verdade o passo é uma ondulação nas costas, assim você não perderia a energia para o terceiro movimento. Obrigada!</Comment.Text>
                              <Comment.Actions>
                                   <Comment.Action>Responder</Comment.Action>
                              </Comment.Actions>
                         </Comment.Content>
                    </Comment>

                    <Comment className='card-comment'>
                         <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                         <Comment.Content>
                              <Comment.Author as='a'>Lucas Holanda</Comment.Author>
                              <Comment.Metadata>
                                   <div>Agora mesmo</div>
                              </Comment.Metadata>
                              <Comment.Text>Também estou treinando essa dança, acho um passo bem complexo!</Comment.Text>
                              <Comment.Actions>
                                   <Comment.Action>Responder</Comment.Action>
                              </Comment.Actions>
                         </Comment.Content>
                    </Comment>
               </Comment.Group>
          </Comment>

          <Form reply>
               <Form.TextArea />
               <Button content='Adicionar Comentário' labelPosition='left' icon='edit' primary />
          </Form>
     </Comment.Group>
)

export default MuiComment

