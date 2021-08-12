import React from "react";
import { Container, Text, Group, Button } from "@mantine/core";
import cx from "clsx";
import { ArrowRightIcon } from "@modulz/radix-icons";
import useStyles from "./Footer.styles";

interface FooterProps {
  withNavbar?: boolean;
}

export function Footer({ withNavbar }: FooterProps) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.spacer} />
      <div
        className={cx(classes.wrapper, { [classes.withNavbar]: withNavbar })}
      >
        <Container size={1100}>
          <div className={classes.inner}>
            <div className={classes.logoSection}>
              <Text className={classes.description} size='sm'>
                Build fully functional accessible web applications with ease
              </Text>
            </div>

            <div className={classes.groups}>
              <div className={classes.feedback}>
                <Text size='lg' weight={500} style={{ marginBottom: 12 }}>
                  Feedback
                </Text>
                <Text className={classes.feedbackDescription} size='sm'>
                  Your feedback is most valuable contribution to the project.
                </Text>

                <Button
                  component='a'
                  href='https://github.com/yoieh/use-holderjs/discussions/new'
                  variant='outline'
                  color='gray'
                  size='sm'
                  rightIcon={<ArrowRightIcon width={10} height={10} />}
                >
                  Leave feedback
                </Button>
              </div>
            </div>
          </div>

          <div className={classes.afterFooter}>
            <Group position='apart'>
              <Text size='xs' className={classes.afterFooterNote}>
               
              </Text>
              <div className={classes.social}>
                {/* <SocialButton
                  type='large'
                  service='discord'
                  className={classes.socialButton}
                />
                <SocialButton
                  type='large'
                  service='twitter'
                  className={classes.socialButton}
                /> */}
              </div>
            </Group>
          </div>
        </Container>
      </div>
    </>
  );
}
