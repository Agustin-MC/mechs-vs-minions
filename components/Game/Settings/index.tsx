import { useState, FC } from 'react';
import { Modal, Text, Button, Group, TextInput, ActionIcon } from '@mantine/core';
import { useForm, formList } from '@mantine/form';
import { Trash } from 'tabler-icons-react';

const Settings: FC = ({ round, setRound }) => {
  const [opened, setOpened] = useState(round.players.length === 0);

  const form = useForm({
    initialValues: {
      players: formList([{ name: '' }]),
    },
  });

  const fields = form.values.players.map((item, index) => (
    <Group key={`player-${index + 1}`} mt="xs">
      <Text size="md">Player {index + 1}</Text>
      <TextInput
        placeholder="John Doe"
        required
        sx={{ flex: 1 }}
        {...form.getListInputProps('players', index, 'name')}
      />
      <ActionIcon color="red" variant="hover" onClick={() => form.removeListItem('players', index)}>
        <Trash size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Settings">
        <form
          onSubmit={form.onSubmit((values) =>
            setRound((prevRound: { phase: string; players: string[] }) => ({
              ...prevRound,
              players: values.players,
            }))
          )}
        >
          {fields}
          <Group position="center" mt="md">
            <Button
              onClick={() => form.addListItem('players', { name: '' })}
              disabled={form.values.players.length >= 4}
            >
              Add Player
            </Button>
          </Group>

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Modal>

      <Group position="right">
        <Button
          onClick={() => setOpened(true)}
          variant="gradient"
          gradient={{ from: 'brown', to: 'maroon' }}
        >
          Settings
        </Button>
      </Group>
    </>
  );
};

export default Settings;
