# ec2.InitCommand.argvCommand bug repro

This is as small a repro of the ec2.InitCommand.argvCommand bug as I can make.

`cdk synth` shows the generated template is missing the second '1001' arg from second `command` entry.

## Useful commands

* `cdk synth`       emits the synthesized CloudFormation template
