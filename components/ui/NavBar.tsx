import Image from 'next/image'
import NextLink from 'next/link'
import { Text, useTheme, Spacer, Link } from '@nextui-org/react'

 

export const NavBar = () => {

    const { theme } = useTheme();
    console.log( theme );

    return (
        <div style={{
            alignItems: 'center',
            backgroundColor: theme?.colors.gray900.value,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            padding: '0px 50px',
            width: '100%'
        }}>
            <Image 
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                alt='Icono de la App'
                width={ 70 }
                height={ 70 }
            />

            <NextLink href='/' passHref>
                <Link>
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okémon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }}/>

            <NextLink href='/favorites' passHref>
                <Link css={{ marginRight: '10px' }}>
                    <Text color='white'>Favoritos</Text>
                </Link>
            </NextLink>

        </div>
    )
}