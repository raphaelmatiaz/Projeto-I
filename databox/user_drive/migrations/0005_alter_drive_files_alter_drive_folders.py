# Generated by Django 5.0.6 on 2024-06-19 10:15

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "user_drive",
            "0004_remove_file_folder_file_parent_alter_folder_parent_and_more",
        ),
    ]

    operations = [
        migrations.AlterField(
            model_name="drive",
            name="files",
            field=models.ForeignKey(
                blank=True,
                default=None,
                null=True,
                on_delete=django.db.models.deletion.SET_DEFAULT,
                related_name="DriveFileChildren",
                to="user_drive.file",
            ),
        ),
        migrations.AlterField(
            model_name="drive",
            name="folders",
            field=models.ForeignKey(
                blank=True,
                default=None,
                null=True,
                on_delete=django.db.models.deletion.SET_DEFAULT,
                related_name="DriveFolderChildren",
                to="user_drive.folder",
            ),
        ),
    ]
