/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'

import { render } from '@testing-library/svelte'

import Button from './Button.svelte'

test('rendering', () => {
    const { getByText} = render(Button, {
        label: 'TestButton'})

    expect(getByText('TestButton')).toBeInTheDocument()
})
