import { ProgramId } from '@/types/program';

export const programPortalTargets = {
    usableScreen: 'usable-screen',
    dockPreview: (programId: ProgramId) => `dock-preview-${programId}`
};