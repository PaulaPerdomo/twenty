import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { useSnackBar } from '@/snack-bar/hooks/useSnackBar';
import { Button } from '@/ui/components/buttons/Button';
import { TextInput } from '@/ui/components/inputs/TextInput';
import { IconCopy, IconLink } from '@/ui/icons';

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const StyledLinkContainer = styled.div`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

type OwnProps = {
  inviteLink: string;
};

export function WorkspaceInviteLink({ inviteLink }: OwnProps) {
  const theme = useTheme();

  const { enqueueSnackBar } = useSnackBar();

  return (
    <StyledContainer>
      <StyledLinkContainer>
        <TextInput value={inviteLink} disabled fullWidth />
      </StyledLinkContainer>
      <Button
        icon={<IconLink size={theme.icon.size.md} />}
        variant="primary"
        title="Copy link"
        onClick={() => {
          enqueueSnackBar('Link copied to clipboard', {
            variant: 'success',
            icon: <IconCopy size={theme.icon.size.md} />,
            duration: 2000,
          });
          navigator.clipboard.writeText(inviteLink);
        }}
      />
    </StyledContainer>
  );
}