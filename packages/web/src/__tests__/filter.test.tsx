import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '../components/App';
import {
  mockedListPokemonQuery,
  mockedListPokemonSpeciesFilterQuery,
  mockedListPokemonTypeFilterQuery,
} from '../__fixtures__';
import { mockedListPokemonNameFilterQuery } from '../__fixtures__/mockedListPokemonNameFilterQuery';
import { useMockedAutoSizer } from '../__fixtures__/useMockedAutoSizer';

/**
 * Workaround for selecting Autocomplete option:
 * https://github.com/mui-org/material-ui/issues/18251#issuecomment-632825845
 */
const selectAutocompleteOption = (autocomplete: HTMLElement, value: string) => {
  // Click into the component
  autocomplete.focus();
  // Type "normal"
  fireEvent.change(autocomplete, { target: { value } });
  // Arrow down to first option
  fireEvent.keyDown(autocomplete, { key: 'ArrowDown' });
  // Select element
  fireEvent.keyDown(autocomplete, { key: 'Enter' });
};

describe('Filters', () => {
  useMockedAutoSizer();

  test('filters Pokemon by name', async () => {
    render(
      <MockedProvider
        mocks={[mockedListPokemonQuery, mockedListPokemonNameFilterQuery]}
      >
        <App />
      </MockedProvider>,
    );

    // Window rendered by jsdom is xs size, so we need to click the menu button
    const filterMenuButton = screen.getByRole('button', { name: /filters/i });
    fireEvent.click(filterMenuButton);

    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'pikachu' } });

    const listItemText = await screen.findByText('Pikachu');
    const count = screen.getByText(/15 POKÉMON FOUND!/i);

    expect(listItemText).toBeInTheDocument();
    expect(count).toBeInTheDocument();
  });

  test('filters Pokemon by type', async () => {
    render(
      <MockedProvider
        mocks={[mockedListPokemonQuery, mockedListPokemonTypeFilterQuery]}
      >
        <App />
      </MockedProvider>,
    );

    // Window rendered by jsdom is xs size, so we need to click the menu button
    const filterMenuButton = screen.getByRole('button', { name: /filters/i });
    fireEvent.click(filterMenuButton);

    const typeAutocomplete = screen.getByPlaceholderText('Type');
    selectAutocompleteOption(typeAutocomplete, 'normal');

    const listItemText = await screen.findByText(/Pidgey/i);
    const count = screen.getByText(/130 POKÉMON FOUND!/i);

    expect(listItemText).toBeInTheDocument();
    expect(count).toBeInTheDocument();
  });

  test('filters Pokemon by species', async () => {
    render(
      <MockedProvider
        mocks={[mockedListPokemonQuery, mockedListPokemonSpeciesFilterQuery]}
      >
        <App />
      </MockedProvider>,
    );

    // Window rendered by jsdom is xs size, so we need to click the menu button
    const filterMenuButton = screen.getByRole('button', { name: /filters/i });
    fireEvent.click(filterMenuButton);

    const speciesAutocomplete = screen.getByPlaceholderText('Species');
    selectAutocompleteOption(speciesAutocomplete, 'bulbasaur');

    const listItemText = await screen.findByText(/Bulbasaur/i);
    const count = screen.getByText(/1 POKÉMON FOUND!/i);
    expect(listItemText).toBeInTheDocument();
    expect(count).toBeInTheDocument();
  });
});
