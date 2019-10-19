export interface EventsTableItem {
  position: number;
  icon: string;
  color: string;
  decoy: string;
  time: string;
  source: string;
  processName: string;
  details: string;
}

export const EXAMPLE_DATA: EventsTableItem[] = [
  {
    position: 1,
    icon: 'file_copy',
    color: '#ab854c',
    decoy: 'win7-decoy-1',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 2,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 3,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win7-decoy-3',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 4,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win12-decoy-4',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },

  {
    position: 5,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win7-decoy-5',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 6,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win18-decoy-6',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 6,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },

  {
    position: 7,
    icon: 'remove_from_queue',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 8,
    icon: 'remove_from_queue',
    color: '#ab854c',
    decoy: 'win7-decoy-1',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 9,
    icon: 'file_copy',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 10,
    icon: 'home',
    color: '#ff8500',
    decoy: 'win7-decoy-3',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 11,
    icon: 'home',
    color: '#ab854c',
    decoy: 'win12-decoy-4',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },

  {
    position: 12,
    icon: 'file_copy',
    color: '#ab854c',
    decoy: 'win7-decoy-5',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 13,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win18-decoy-6',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 14,
    icon: 'web',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },
  {
    position: 15,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 16,
    icon: 'home',
    color: '#ff8500',
    decoy: 'win7-decoy-3',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 17,
    icon: 'home',
    color: '#ab854c',
    decoy: 'win12-decoy-4',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },

  {
    position: 18,
    icon: 'file_copy',
    color: '#3a9aca',
    decoy: 'win7-decoy-5',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },

  {
    position: 19,
    icon: 'remove_from_queue',
    color: '#ab854c',
    decoy: 'win18-decoy-6',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 20,
    icon: 'web',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },
  {
    position: 21,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 22,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win12-decoy-4',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },

  {
    position: 23,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win7-decoy-5',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },
  {
    position: 24,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  }, {
    position: 25,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  }, {
    position: 26,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 27,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win18-decoy-6',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 28,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },

  {
    position: 29,
    icon: 'remove_from_queue',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 20,
    icon: 'web',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },
  {
    position: 21,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 22,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win12-decoy-4',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },

  {
    position: 23,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win7-decoy-5',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },
  {
    position: 24,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  }, {
    position: 25,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  }, {
    position: 26,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 27,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win18-decoy-6',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 28,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },

  {
    position: 29,
    icon: 'remove_from_queue',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 30,
    icon: 'web',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },
  {
    position: 31,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 32,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win12-decoy-4',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },

  {
    position: 33,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win7-decoy-5',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },
  {
    position: 34,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  }, {
    position: 35,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  }, {
    position: 36,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 37,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win18-decoy-6',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 38,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },

  {
    position: 39,
    icon: 'remove_from_queue',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 30,
    icon: 'web',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },
  {
    position: 31,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 32,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win12-decoy-4',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },

  {
    position: 33,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win7-decoy-5',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },
  {
    position: 34,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  }, {
    position: 35,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  }, {
    position: 36,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 37,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win18-decoy-6',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 38,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },

  {
    position: 39,
    icon: 'remove_from_queue',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 40,
    icon: 'web',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },
  {
    position: 41,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },
  {
    position: 42,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win12-decoy-4',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  },

  {
    position: 43,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win7-decoy-5',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\regedit.exe',
    details: 'C:\\Windows\\regedit.exe'
  },
  {
    position: 44,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  }, {
    position: 45,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  }, {
    position: 46,
    icon: 'remove_from_queue',
    color: '#3a9aca',
    decoy: 'win12-decoy-2',
    time: new Date().toLocaleString().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 47,
    icon: 'warning',
    color: '#ab854c',
    decoy: 'win18-decoy-6',
    time: new Date().toLocaleString().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\system32.dllhost.exe',
    details: 'C:\\Windows\\system32.dllhost.exe'
  },

  {
    position: 48,
    icon: 'file_copy',
    color: '#ff8500',
    decoy: 'win12-decoy-7',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\rexplorer.exe',
    details: 'C:\\Windows\\rexplorer.exe.exe'
  },

  {
    position: 49,
    icon: 'remove_from_queue',
    color: '#ff8500',
    decoy: 'win12-decoy-8',
    time: new Date().toLocaleString(),
    source: '',
    processName: 'c:\\windows\\explorer.exe',
    details: 'C:\\Windows\\explorer.exe'
  }
];

