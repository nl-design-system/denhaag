import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@gemeente-denhaag/table';
import readme from '../../../../components/Table/README.md?raw';

const exampleArgs = {
  children: (
    <>
      <TableCaption>He-Man and Skeletor facts</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableHeader className="heman">He-Man</TableHeader>
          <TableHeader className="skeletor">Skeletor</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableHeader scope="row">Role</TableHeader>
          <TableCell>Hero</TableCell>
          <TableCell>Villain</TableCell>
        </TableRow>
        <TableRow>
          <TableHeader scope="row">Weapon</TableHeader>
          <TableCell>Power Sword</TableCell>
          <TableCell>Havoc Staff</TableCell>
        </TableRow>
        <TableRow>
          <TableHeader scope="row">Dark secret</TableHeader>
          <TableCell>Expert florist</TableCell>
          <TableCell>Cries at romcoms</TableCell>
        </TableRow>
      </TableBody>
    </>
  ),
};

const meta = {
  id: 'css-data-display-table',
  title: 'CSS/Data Display/Table',
  component: Table,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <TableCaption>He-Man and Skeletor facts</TableCaption>
        <TableHead>
          <TableRow tabIndex={-1}>
            <TableCell></TableCell>
            <TableHeader className="heman">He-Man</TableHeader>
            <TableHeader className="skeletor">Skeletor</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row">Role</TableHeader>
            <TableCell>Hero</TableCell>
            <TableCell>Villain</TableCell>
          </TableRow>
          <TableRow className="denhaag-table__row--hover">
            <TableHeader scope="row">Weapon</TableHeader>
            <TableCell>Power Sword</TableCell>
            <TableCell>Havoc Staff</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">Dark secret</TableHeader>
            <TableCell>Expert florist</TableCell>
            <TableCell>Cries at romcoms</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

export const Focus: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <TableCaption>He-Man and Skeletor facts</TableCaption>
        <TableHead>
          <TableRow tabIndex={-1}>
            <TableCell></TableCell>
            <TableHeader className="heman">He-Man</TableHeader>
            <TableHeader className="skeletor">Skeletor</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row">Role</TableHeader>
            <TableCell>Hero</TableCell>
            <TableCell>Villain</TableCell>
          </TableRow>
          <TableRow className="denhaag-table__row--focus">
            <TableHeader scope="row">Weapon</TableHeader>
            <TableCell>Power Sword</TableCell>
            <TableCell>Havoc Staff</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">Dark secret</TableHeader>
            <TableCell>Expert florist</TableCell>
            <TableCell>Cries at romcoms</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

export const HorizontalAlign: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <TableCaption>He-Man and Skeletor facts</TableCaption>
        <TableHead>
          <TableRow>
            <TableHeader></TableHeader>
            <TableHeader className="heman denhaag-table__heading--align-center">He-Man</TableHeader>
            <TableHeader className="skeletor denhaag-table__heading--align-end">Skeletor</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row">Role</TableHeader>
            <TableCell className="denhaag-table__cell--align-center">Hero</TableCell>
            <TableCell className="denhaag-table__cell--align-end">Villain</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">Weapon</TableHeader>
            <TableCell className="denhaag-table__cell--align-center">Power Sword</TableCell>
            <TableCell className="denhaag-table__cell--align-end">Havoc Staff</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row">Dark secret</TableHeader>
            <TableCell className="denhaag-table__cell--align-center">Expert florist</TableCell>
            <TableCell className="denhaag-table__cell--align-end">Cries at romcoms</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

export const VerticalAlign: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <TableCaption>He-Man and Skeletor facts</TableCaption>
        <TableHead>
          <TableRow>
            <TableHeader></TableHeader>
            <TableHeader className="heman">He-Man</TableHeader>
            <TableHeader className="skeletor">Skeletor</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row">Role</TableHeader>
            <TableCell>Hero</TableCell>
            <TableCell>Villain</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row" className="denhaag-table__cell--align-top">
              Weapon
            </TableHeader>
            <TableCell className="denhaag-table__cell--align-top">
              Power
              <br />
              Sword
            </TableCell>
            <TableCell className="denhaag-table__cell--align-top">
              Havoc
              <br />
              Staff
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row" className="denhaag-table__cell--align-bottom">
              Dark secret
            </TableHeader>
            <TableCell className="denhaag-table__cell--align-bottom">
              Expert
              <br />
              florist
            </TableCell>
            <TableCell className="denhaag-table__cell--align-bottom">
              Cries
              <br />
              at
              <br />
              romcoms
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

export const Simple: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <TableCaption>Kosten overzicht</TableCaption>
        <TableHead>
          <TableRow tabIndex={-1}>
            <TableHeader>Soort kosten</TableHeader>
            <TableHeader>Bedrag 2021</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Beheerkosten (administratie) per jaar</TableCell>
            <TableCell>&euro; 27,50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Afkoopsom beheerkosten</TableCell>
            <TableCell>&euro; 232</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Splitsingskosten per appartementsrecht of per recht van erfpacht</TableCell>
            <TableCell>&euro; 153</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

export const LongTitle: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <TableCaption>Voorbeeld met extreem lange titel die je eigenlijk wilt voorkomen.</TableCaption>
        <TableHead>
          <TableRow tabIndex={-1}>
            <TableHeader>Titel met een hele lange omschrijving die overloopt</TableHeader>
            <TableHeader>Tijd</TableHeader>
            <TableHeader>Leeftijd</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>maandag</TableCell>
            <TableCell>11.00 tot 12,30</TableCell>
            <TableCell>Alle leeftijden</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>dinsdag</TableCell>
            <TableCell>8.30 tot 11,30</TableCell>
            <TableCell>Alle leeftijden</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>donderdag</TableCell>
            <TableCell>11.00 tot 12,30</TableCell>
            <TableCell>Alle leeftijden</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

export const withLink: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <TableCaption>He-Man and Skeletor facts</TableCaption>
        <TableHead>
          <TableRow tabIndex={-1}>
            <TableCell></TableCell>
            <TableHeader className="heman">He-Man</TableHeader>
            <TableHeader className="skeletor">Skeletor</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope="row" href="#example">
              Role
            </TableHeader>
            <TableCell href="#example">Hero</TableCell>
            <TableCell href="#example">Villain</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row" href="#example">
              Weapon
            </TableHeader>
            <TableCell href="#example">Power Sword</TableCell>
            <TableCell href="#example">Havoc Staff</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope="row" href="#example">
              Dark secret
            </TableHeader>
            <TableCell href="#example">Expert florist</TableCell>
            <TableCell href="#example">Cries at romcoms</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};
