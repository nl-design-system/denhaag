# Chat

The chat is a communication medium between employees and users.

## When to use

The chat is used to allow a user to have a person-to-person conversation with an employee. Use a chat when a user would benefit from requesting information with natural language, when they will be provided with in-contect help and guidance or when they need to perfom common tasks or procedures (e.g., send a file). They should receive a useful and trustworthy response related to their question or task.

## Alternatives and related components

None.

## Anatomy

The chat consists of:

1. Responder message: indicates what the responder entered via text input or sent via attachments.
2. User message: indicates what the user entered via text input or sent via attachments.
3. Meta data: the time of the message sent.
4. Date: shows the date of the chat, such as yes@terday, today.
5. Events: shows events such as when an employee has entered the chat.
6. File attachment: a file which has been uploaded by the user or responder.
7. Message input: the input is comprised of a text input field, a configurable button for other input (e.g., attachment) and a submit button.
8. Launch button: the means by which a user initiates a conversation with the employee.

## (Interactive) states

None.

## Design properties

### Typography

- Responder message: TheSans/md/400
- User message: TheSans/md/400
- Meta data: TheSans/s/400
- Events: TheSans/md/400
- File attachment: TheSans/md/400
- Message input: TheSans/s/700

### Color

- Label inactive: text color Grey/4

### Interactive states

- Hover inactive: leading icon text color Blue/3, leading icon border color Blue/3, label text color Blue/3, trailing icon Blue/3

### Structure

- Avatar: height and width 48px, margin-right 8px
- Responder message: min-height 48px, padding-left and padding-right 16px, padding-top and padding-bottom 12px, margin-bottom 4px
- User message:  min-height 48px, padding-left and padding-right 16px, padding-top and padding-bottom 12px, margin-bottom 4px
- Meta data: margin-bottom 48px
- Date: padding-top 32px, padding-bottom 24px,
- Event: icon size 20px, icon padding-right 8px, margin-top and margin-bottom 24px
- Message input: chat field padding 16px, text input padding-bottom 24px, icon padding-right 12px, icon padding-bottom 4px, file attachment space inbetween 8px
- File attachment: height 56px, padding-top, padding-bottom and padding-left 12px, padding-right 16px, icon group size 32px, icon group size padding-right 12px, icon in icon group 16px, delete icon 16px, delete icon padding-right 4px
- Launch button: we use the components ‘Button, Secondary action, Icon-left, Medium’ and ‘Navigation-links, Icon right, Medium’. The structure of these components can be found in their documentation.

## Accessibility

The log role has an implicit `aria-live` property value of `polite`, meaning that it comes for free. It also has an implicit `aria-relevant` property value of `additions` text. Together this means any additional text, or chat items added to the list will automatically be politely announced by a screen reader.

## Content guidelines

### Use a clear label to identify the chat box

Users shouldn’t spend any time decoding the meaning of UI elements. Some websites hide the chat behind vague tags such as “Ask a question.” This approach may not work well for site visitors because it could be misconstrued as a way to send an email or comb through an FAQ. Write clear labels that set the right expectations for UI elements. It’s better to have the launch button labeled as “Chat.”

## Best practices

### Provide a response

The employee should provide a thoughtful, informative response to the user’s intent, based on the information they have provided throughout the conversation.

### Clearly show the expected response time

Time is a precious resource. When people visit websites, they want to get answers to their questions quickly and efficiently. For this reason users should be aware of how long it takes for the employee to reply. If chat operators aren’t available 24/7, it’s important to specify the hours upfront, before the user types the first sentence. By saying, “We’re available from 9 am till 5 pm PST Monday through Friday,” you set expectations for when users will get a response.

### Don’t act like a robot

The employee must answer in easy and normal human language. He should not pretend to be a robot and give standard answers.

### Prepare answers for typical questions

One of the first steps you need to take is to find the typical questions the users asks. Prepare responses for the most frequently asked questions and share the answers with chat operators so they can include this information in their protocol for a chat. The procedure of research and analysis will also help you find the gaps in content and fill them in by adding missing details.

### Avoid long sentences and blocks of text

Employees can help users to scan the text by writing it in short, digestible blocks. This rule should work both for auto-generated content (such as introductory information that users see at the beginning of the chat) and the information from operators. According to the book Typographie by Emil Ruder, optimal line length for body text is considered to be 50-60 characters per line, including spaces. This line-length creates a comfortable reading rhythm because it helps the eye travel more naturally between the lines.

### Minimize wait time

People don’t like to wait. Even a minute of waiting can seem like a long time if you make visitors stare at an empty screen. Keep users updated on how fast they will get a response. It is especially important to reduce the wait time on mobile because mobile users can easily be distracted by other activities (offline or online), eventually switching to them, and forgetting about the chat entirely.

### Allow users to save a transcript of the session

Many chat systems offered to email users a transcript or allowed them to save a pdf. Users commented favorably when they were offered with these options, for several reasons: (1) the transcript could serve as a reference later; (2) they felt reassured that they could quote the agent in case of a dispute or another type of issue — “I like having the transcript; especially if they’re rude.”

### Provide users with specific, detailed answers

When people have invested the time in a chat conversation, it means they likely need detail that they were not able to find by themselves elsewhere. So it’s important to be as specific as possible and offer them answers that match their needs.

### Behavior

The message input is sticky at the bottom of the screen.

New messages will be shown below, so old messages will be scrolled up.

### Dos

### Don’ts

## References

[https://www.helpscout.com/helpu/best-practices-live-chat/](https://www.helpscout.com/helpu/best-practices-live-chat/)
[https://xd.adobe.com/ideas/principles/web-design/usability-best-practices-chat-boxes/](https://xd.adobe.com/ideas/principles/web-design/usability-best-practices-chat-boxes/)
[https://www.nngroup.com/articles/chat-ux/](https://www.nngroup.com/articles/chat-ux/)
