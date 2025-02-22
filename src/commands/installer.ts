import { CommandDefinition } from '../lib/command';
import { CommandCategory } from '../constants';
import { makeEmbed } from '../lib/embed';

export const installer: CommandDefinition = {
    name: 'installer',
    description: 'Provides link to the new installer',
    category: CommandCategory.FBW,
    executor: (msg) => msg.channel.send(makeEmbed({
        title: 'Installer',
        description: 'Download the new A32NX Installer where you can select either the Stable, Developer or an Experimental Version, '
            + 'and download and install the addon directly into your Community Folder, [download here](https://api.flybywiresim.com/installer)',
        footer: { text: 'If you are having further problems, let us know in our Support Channel and we will provide more assistance.' },
    })),
};
