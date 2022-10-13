import { Tab } from '@headlessui/react'
import Container from '../layout/Container'
import Multiwrap from './Multiwrap'
import MyNFT from './MyNFT'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Page() {

    const tabs = [
        { name: "Mint", child: <Multiwrap />},
        { name: "My NFTs", child: <MyNFT />},
    ]

  return (
    <Container>
      <Tab.Group>
        <Tab.List className="flex justify-center space-x-1 rounded-xl bg-slate-900/20 p-1 w-64 mx-auto mb-16">
          {tabs.map((tab, key) => (
            <Tab
              key={key}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-700',
                  selected
                    ? 'bg-white shadow'
                    : 'text-slate-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {tabs.map((tab, key) => (
            <Tab.Panel key={key} >
              {tab.child}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      </Container>
  )
}
