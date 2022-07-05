import {
  Appear,
  Box,
  CodePane,
  Deck,
  Heading,
  Markdown,
  Notes,
  Slide,
  SlideLayout,
  Text,
} from 'spectacle'

import theme from 'theme'

export default function App() {
  return (
    <Deck theme={theme}>
      <Slide>
        <Notes>Aquí hablamos del heading</Notes>
        <Heading>Este no hace nada cool!</Heading>
        <Notes>
          Aquí hablamos del{' '}
          <Box color="red" display="inline-block">
            Text
          </Box>{' '}
          component.
        </Notes>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
          rerum? Nam, id! Numquam iste ipsa repellendus distinctio voluptatum
          libero nihil doloremque modi sed nostrum nulla, eius ea mollitia optio
          eveniet!
        </Text>
      </Slide>
      <Slide>
        <Notes>Aquí tenemos presentación de código.</Notes>
        <Heading>CodePane</Heading>
        <CodePane
          highlightRanges={[
            [1, 2],
            [4, 14],
            [15, 16],
            [51, 64],
          ]}
          language="javascript"
        >
          {`
          import {cloneElement} from 'react'
          import type {ReactNode} from 'react'
          
          import {
            Box,
            HStack,
            IconButton,
            Menu,
            MenuButton,
            MenuList,
            Show,
            Stack,
          } from '@chakra-ui/react'
          import {getValidChildren} from '@chakra-ui/react-utils'
          import {faEllipsisVertical as farEllipsisVertical} from '@fortawesome/pro-regular-svg-icons'
          import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
          
          import {PlaceholderProvider} from './context'
          
          interface EntityProps {
            actions?: ReactNode
            children: ReactNode
            menuItems?: ReactNode
            placeholder?: boolean
            thumbnail?: ReactNode
          }
          
          export function Entity({
            actions,
            children,
            menuItems,
            placeholder = false,
            thumbnail,
          }: EntityProps) {
            const menuItemsMarkup = menuItems ? (
              <Menu>
                <MenuButton
                  as={IconButton}
                  disabled={placeholder}
                  gridArea="menu"
                  size="sm"
                  variant="unstyled"
                >
                  <FontAwesomeIcon icon={farEllipsisVertical} />
                </MenuButton>
                <MenuList>{menuItems}</MenuList>
              </Menu>
            ) : null
          
            const validChildren = getValidChildren(children)
            const clones = validChildren.map((child, index) => {
              const isFirstChild = index === 0
          
              return cloneElement(child, {
                isFirstChild,
                ...(isFirstChild
                  ? {
                      actions,
                      menuItems: menuItemsMarkup,
                      thumbnail,
                    }
                  : {}),
              })
            })
          
            return (
              <PlaceholderProvider placeholder={placeholder}>
                <Box
                  bgColor="white"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="md"
                  padding="4"
                  position="relative"
                  sx={{
                    '& + &': {
                      borderTopLeftRadius: '0',
                      borderTopRightRadius: '0',
                      marginBlockStart: '-px',
                      _before: {
                        bgColor: 'white',
                        borderColor: 'gray.200',
                        borderLeftWidth: '1px',
                        borderRightWidth: '1px',
                        content: '" "',
                        height: '1',
                        insetBlockStart: '-5px',
                        insetInline: '-px',
                        position: 'absolute',
                      },
                    },
                  }}
                >
                  <HStack>
                    <Stack
                      alignItems={{md: 'center'}}
                      direction={{base: 'column', md: 'row'}}
                      flex="1"
                      spacing="4"
                    >
                      {clones}
                    </Stack>
                    <Show above="md">
                      {actions}
                      {menuItemsMarkup}
                    </Show>
                  </HStack>
                </Box>
              </PlaceholderProvider>
            )
          }
          `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Appear</Heading>
        {Array.from(Array(4).keys()).map((index) => (
          <Appear key={index}>
            <Text>Index: {index + 1}</Text>
          </Appear>
        ))}
      </Slide>
      <SlideLayout.List
        animateListItems
        items={['Item 1', 'Item 2', 'Item 3']}
        title="SlideLayout.List"
      />
      <SlideLayout.TwoColumn
        left={
          <>
            <Appear>
              <Heading>Left</Heading>
            </Appear>
            <Appear>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Text>
            </Appear>
          </>
        }
        right={
          <>
            <Appear>
              <Heading>Right</Heading>
            </Appear>
            <Appear>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Text>
            </Appear>
          </>
        }
      />
      <Slide>
        <Heading>Markdown</Heading>
        <Markdown>
          {`
          # Heading 1

          - test **bold** ~~asfd~~.
          - test 2.
          `}
        </Markdown>
      </Slide>
      <Slide>
        <Heading>CodeSandbox</Heading>
        <iframe
          src="https://codesandbox.io/embed/2hbg5?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: '100%',
            height: '100%',
            border: 0,
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title="Framer Motion: Gesture animations"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Slide>
    </Deck>
  )
}
