import React from 'react'
import Header from './components/Header'
import Messages from './components/Messages'
import Reply from './components/Reply'

export default function Chat() {
  const user = {
    name: 'John Doe',
    avatar: '../no-avatar.jpg',
  }
  const messages = [
    {
      from: {
        id: "t1k3UiHbwYUTix4loH974wwl4C02",
        name: "Ricardo Quaresma",
        avatar: "../no-avatar.jpg",
        username: "quaresma"
      },
      message: "Hello",
    },
    {
      from: {
        id: "t1k3UiHbwYUTix4loH974wwl4C02",
        name: "Ricardo Quaresma",
        avatar: "../no-avatar.jpg",
        username: "quaresma"
      },
      message: "Hello sfdddddddddddddddddddd df dsf sdfs dfsd f dsf sdf sd f ds fds fds f sdf sdf ds f ds f sd fs df ds f sd fdsfds f sd fds f ds f dsf ds f sd fsdf dsf ds fs df sdf sd",
    },
    {
      from: {
        id: "YJj5VtfmM9UC4sI5MX8RUaBXTpa2",
        name: "Osman Ekrem Korkmaz",
        avatar: "../no-avatar.jpg",
        username: "osmanekrem"
      },
      message: "Hello",
    },
    {
      from: {
        id: "t1k3UiHbwYUTix4loH974wwl4C02",
        name: "Ricardo Quaresma",
        avatar: "../no-avatar.jpg",
        username: "quaresma"
      },
      message: "Hello",
    },
    {
      from: {
        id: "t1k3UiHbwYUTix4loH974wwl4C02",
        name: "Ricardo Quaresma",
        avatar: "../no-avatar.jpg",
        username: "quaresma"
      },
      message: "Hello sfdddddddddddddddddddd df dsf sdfs dfsd f dsf sdf sd f ds fds fds f sdf sdf ds f ds f sd fs df ds f sd fdsfds f sd fds f ds f dsf ds f sd fsdf dsf ds fs df sdf sd",
    },
    {
      from: {
        id: "YJj5VtfmM9UC4sI5MX8RUaBXTpa2",
        name: "Osman Ekrem Korkmaz",
        avatar: "../no-avatar.jpg",
        username: "osmanekrem"
      },
      message: "Hello",
    },
    {
      from: {
        id: "t1k3UiHbwYUTix4loH974wwl4C02",
        name: "Ricardo Quaresma",
        avatar: "../no-avatar.jpg",
        username: "quaresma"
      },
      message: "Hello",
    },
    {
      from: {
        id: "t1k3UiHbwYUTix4loH974wwl4C02",
        name: "Ricardo Quaresma",
        avatar: "../no-avatar.jpg",
        username: "quaresma"
      },
      message: "Hello sfdddddddddddddddddddd df dsf sdfs dfsd f dsf sdf sd f ds fds fds f sdf sdf ds f ds f sd fs df ds f sd fdsfds f sd fds f ds f dsf ds f sd fsdf dsf ds fs df sdf sd",
    },
    {
      from: {
        id: "YJj5VtfmM9UC4sI5MX8RUaBXTpa2",
        name: "Osman Ekrem Korkmaz",
        avatar: "../no-avatar.jpg",
        username: "osmanekrem"
      },
      message: "Hello",
    },
    {
      from: {
        id: "t1k3UiHbwYUTix4loH974wwl4C02",
        name: "Ricardo Quaresma",
        avatar: "../no-avatar.jpg",
        username: "quaresma"
      },
      message: "Hello",
    },
    {
      from: {
        id: "t1k3UiHbwYUTix4loH974wwl4C02",
        name: "Ricardo Quaresma",
        avatar: "../no-avatar.jpg",
        username: "quaresma"
      },
      message: "Hello sfdddddddddddddddddddd df dsf sdfs dfsd f dsf sdf sd f ds fds fds f sdf sdf ds f ds f sd fs df ds f sd fdsfds f sd fds f ds f dsf ds f sd fsdf dsf ds fs df sdf sd",
    },
    {
      from: {
        id: "YJj5VtfmM9UC4sI5MX8RUaBXTpa2",
        name: "Osman Ekrem Korkmaz",
        avatar: "../no-avatar.jpg",
        username: "osmanekrem"
      },
      message: "Hello",
    },
    {
      from: {
        id: "t1k3UiHbwYUTix4loH974wwl4C02",
        name: "Ricardo Quaresma",
        avatar: "../no-avatar.jpg",
        username: "quaresma"
      },
      message: "Hello",
    },
    {
      from: {
        id: "t1k3UiHbwYUTix4loH974wwl4C02",
        name: "Ricardo Quaresma",
        avatar: "../no-avatar.jpg",
        username: "quaresma"
      },
      message: "Hello sfdddddddddddddddddddd df dsf sdfs dfsd f dsf sdf sd f ds fds fds f sdf sdf ds f ds f sd fs df ds f sd fdsfds f sd fds f ds f dsf ds f sd fsdf dsf ds fs df sdf sd",
    },
    {
      from: {
        id: "YJj5VtfmM9UC4sI5MX8RUaBXTpa2",
        name: "Osman Ekrem Korkmaz",
        avatar: "../no-avatar.jpg",
        username: "osmanekrem"
      },
      message: "Hello",
    },
    {
      from: {
        id: "t1k3UiHbwYUTix4loH974wwl4C02",
        name: "Ricardo Quaresma",
        avatar: "../no-avatar.jpg",
        username: "quaresma"
      },
      message: "Hello",
    },
    {
      from: {
        id: "t1k3UiHbwYUTix4loH974wwl4C02",
        name: "Ricardo Quaresma",
        avatar: "../no-avatar.jpg",
        username: "quaresma"
      },
      message: "Hello sfdddddddddddddddddddd df dsf sdfs dfsd f dsf sdf sd f ds fds fds f sdf sdf ds f ds f sd fs df ds f sd fdsfds f sd fds f ds f dsf ds f sd fsdf dsf ds fs df sdf sd",
    },
    {
      from: {
        id: "YJj5VtfmM9UC4sI5MX8RUaBXTpa2",
        name: "Osman Ekrem Korkmaz",
        avatar: "../no-avatar.jpg",
        username: "osmanekrem"
      },
      message: "Hello",
    },
  ]
  return (
    <div className=' flex-1'>
      <Header user={user} />
      <Messages messages={messages} />
      <Reply />
    </div>
  )
}
